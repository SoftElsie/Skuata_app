# Stage 1: Base runtime image

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Stage 2: Build and publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
ARG NUGET_USERNAME
ARG NUGET_GITHUB_PAT

WORKDIR /src

# Copy csproj files and restore dependencies
COPY ["PMS_app.Server/PMS_app.Server.csproj", "PMS_app.Server/"]
COPY ["pms_app.client/pms_app.client.csproj", "pms_app.client/"]

# Install Node.js (for Angular/React/Vue builds)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
     node --version && npm --version

# Conditionally add GitHub NuGet source if provided
RUN if [ -n "$NUGET_GITHUB_PAT" ]; then \
        dotnet nuget add source \
        --username ${NUGET_USERNAME:-USERNAME} \
        --password ${NUGET_GITHUB_PAT} \
        --store-password-in-clear-text \
        --name github "https://nuget.pkg.github.com/SoftElsie/index.json"; \
    fi

# Copy everything else
COPY . .



# Restore .NET dependencies
WORKDIR /src/PMS_app.Server
RUN dotnet restore "PMS_app.Server.csproj" \
    --source "https://api.nuget.org/v3/index.json" \
    --source "https://nuget.pkg.github.com/SoftElsie/index.json" || true




WORKDIR /src/PMS_app.Server
RUN dotnet build "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/build -v diag

# Build and publish the server + client in one go
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
WORKDIR /src/PMS_app.Server
RUN dotnet publish "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

# Copy prebuilt Angular app (browser folder) into wwwroot
COPY pms_app.client/dist/pms_app.client/browser /app/publish/wwwroot




# Stage 3: Final runtime image
FROM base AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PMS_app.Server.dll"]
