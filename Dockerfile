# Stage 1: Base runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Stage 2: Build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
ARG NUGET_USERNAME
ARG NUGET_GITHUB_PAT

WORKDIR /src

# Copy project files first (for caching)
COPY ["PMS_app.Server/PMS_app.Server.csproj", "PMS_app.Server/"]
COPY ["pms_app.client/pms_app.client.csproj", "pms_app.client/"]

# Install curl, Node.js, and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node --version && npm --version

# Conditionally add GitHub NuGet source only if credentials exist
RUN if [ -n "$NUGET_GITHUB_PAT" ]; then \
        dotnet nuget add source \
        --username ${NUGET_USERNAME:-USERNAME} \
        --password ${NUGET_GITHUB_PAT} \
        --store-password-in-clear-text \
        --name github "https://nuget.pkg.github.com/SoftElsie/index.json"; \
    fi

# Copy everything else
COPY . .

# Restore dependencies
WORKDIR /src/PMS_app.Server
RUN dotnet restore "PMS_app.Server.csproj" \
    --source "https://api.nuget.org/v3/index.json" \
    --source "https://nuget.pkg.github.com/SoftElsie/index.json" || true

# Build
RUN dotnet build "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/build -v diag

# Stage 3: Publish
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

# Stage 4: Final runtime image
FROM base AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PMS_app.Server.dll"]
