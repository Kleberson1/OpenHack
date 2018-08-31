FROM microsoft/aspnetcore-build:2.0 

WORKDIR /app

COPY Backend.csproj /app
RUN dotnet restore

COPY . .
RUN dotnet build

EXPOSE 5000

ENTRYPOINT ["dotnet", "run"]

