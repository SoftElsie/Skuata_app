 FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release

# Use build arguments for sensitive data (passed during build, not hardcoded)
ARG NUGET_USERNAME
ARG NUGET_GITHUB_PAT

WORKDIR /src

# Copy package files first for better caching
COPY ["pms_app.client/package.json", "pms_app.client/"]
COPY ["PMS_app.Server/PMS_app.Server.csproj", "PMS_app.Server/"]


# Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node --version && \
    npm --version

# Configure NuGet source with credentials from build args
RUN dotnet nuget add source \
    --username ${NUGET_USERNAME} \
    --password ${NUGET_GITHUB_PAT} \
    --store-password-in-clear-text \
    --name github "https://nuget.pkg.github.com/SoftElsie/index.json"

# Copy the rest of the application
COPY . .

# Restore dependencies
WORKDIR /src/PMS_app.Server
RUN dotnet restore "PMS_app.Server.csproj" \
    --source "https://nuget.pkg.github.com/SoftElsie/index.json" \
    --source "https://api.nuget.org/v3/index.json"

# Build the application
RUN dotnet build "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PMS_app.Server.dll"]

 
