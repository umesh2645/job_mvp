FROM mcr.microsoft.com/dotnet/aspnet:8.0-alpine AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0-alpine AS build
WORKDIR /src
COPY ["backend/backend.csproj", "backend/"]
RUN dotnet restore "./backend/backend.csproj"
COPY ["backend/", "./backend/"]
WORKDIR "/src/backend"
RUN dotnet build "./backend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./backend.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Building final image used in running container
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .

# Installing procps on the container to enable debugging of .NET Core
RUN apk update && apk add unzip procps
ENTRYPOINT ["dotnet", "backend.dll"]