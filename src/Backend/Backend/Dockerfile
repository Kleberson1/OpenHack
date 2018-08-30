FROM microsoft/aspnetcore-build:2.0 

COPY Backend.csproj /app
RUN dotnet restore /app/Backend.csproj

WORKDIR /app
COPY . .
RUN dotnet build

EXPOSE 5000

ENTRYPOINT ["dotnet", "run"]
