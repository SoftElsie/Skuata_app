# Stage 1: Base runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Stage 2: Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copy csproj files
COPY ["PMS_app.Server/PMS_app.Server.csproj", "PMS_app.Server/"]
COPY ["pms_app.client/pms_app.client.csproj", "pms_app.client/"]

# Install Node.js (for building frontend)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node --version && npm --version

# Copy the rest of the files
COPY . .

# --- Build frontend ---
WORKDIR /src/pms_app.client
RUN npm install
RUN npm run build

# Copy built frontend files into ASP.NET wwwroot
WORKDIR /src/PMS_app.Server
RUN mkdir -p ./wwwroot && cp -r /src/pms_app.client/dist/* ./wwwroot/

# --- Build backend ---
RUN dotnet restore "PMS_app.Server.csproj"
RUN dotnet build "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/build
RUN dotnet publish "PMS_app.Server.csproj" -c ${BUILD_CONFIGURATION} -o /app/publish /p:UseAppHost=false

# Stage 3: Final runtime image
FROM base AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "PMS_app.Server.dll"]
