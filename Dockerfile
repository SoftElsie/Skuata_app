# =========================================
# Stage 1: Base runtime image
# =========================================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Create a writable temp directory
RUN mkdir -p /temp && chmod 777 /temp

# =========================================
# Stage 2: Build image
# =========================================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Build args
ARG BUILD_CONFIGURATION=Release
ARG NUGET_USERNAME
ARG NUGET_GITHUB_PAT

WORKDIR /src

# Copy project files first for caching
COPY ["PMS_app.Server/PMS_app.Server.csproj", "PMS_app.Server/"]
COPY ["pms_app.client/pms_app.client.csproj", "pms_app.client/"]

# Install curl, Node.js 18, and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node --version && npm --version && \
    rm -rf /var/lib/apt/lists/*

# Conditionally add GitHub NuGet source if credentials exist
RUN if [ -n "$NUGET_GITHUB_PAT" ]; then \
        dotnet nuget add source \
        --username ${NUGET_USERNAME:-USERNAME} \
        --password ${NUGET_GITHUB_PAT} \
        --store-password-in-clear-text \
        --name github "https://nuget.pkg.github.com/SoftElsie/index.json"; \
    fi

# Copy all source code
COPY . .

# Restore dependencies
WORKDIR /src/PMS_app.Server
RUN dotnet restore "PMS_app.Server.csproj" \
    --source "https://api.nuget.org/v3/index.json" \
    --source "https://nuget.pkg.github.com/SoftElsie/index.json"

# Build project
RUN dotnet build "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/build -v diag

# =========================================
# Stage 3: Publish
# =========================================
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

# =========================================
# Stage 4: Final runtime image
# =========================================
FROM base AS final
WORKDIR /app

# Set environment variable for ASP.NET Core
ENV ASPNETCORE_URLS=http://+:80

# Copy published app from build
COPY --from=publish /app/publish .

# Entry point
ENTRYPOINT ["dotnet", "PMS_app.Server.dll"]
