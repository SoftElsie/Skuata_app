 
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
 
 
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
ENV NUGET_USERNAME="Steekay27"
ENV NUGET_GITHUB_PAT="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"
 
 
WORKDIR /src
 
 
COPY ["ClientApp/package.json", "ClientApp/"]
COPY ["ng-softelsie.csproj", ""]
 
#Install Node.js and npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
 
 
 
RUN dotnet nuget add source \
    --username Steekay27 \
    --password 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 \
    --store-password-in-clear-text \
    --name github "https://nuget.pkg.github.com/SoftElsie/index.json"
 
COPY . .
 
RUN dotnet restore "ng-softelsie.csproj" \
    --source "https://nuget.pkg.github.com/SoftElsie/index.json" \
    --source "https://api.nuget.org/v3/index.json"
 
    #Verify Node.js installation
RUN node --version
 
 
 
 
WORKDIR "/src"
 
RUN dotnet build "ng-softelsie.csproj" -c $BUILD_CONFIGURATION -o /app/build
 
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish  -o /app/publish
 
FROM base AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ng-softelsie.dll"]
 
 
