FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
COPY Backend/Backend.csproj Backend/
RUN dotnet restore Backend/Backend.csproj
COPY . .
WORKDIR /src/Backend
RUN dotnet build Backend.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish Backend.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Backend.dll"]
