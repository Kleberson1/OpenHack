az ad app create --display-name "BackendApp1" --homepage "http://localhost/backend" --password "..." --identifier-uris http://localhost/backend

appId = 4ec8d063-b0c6-487b-a438-4619ae760807

az ad sp create --id 4ec8d063-b0c6-487b-a438-4619ae760807

Tenant: 29acf139-3947-41a7-9e61-984e84ccdbce

https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest

az login --service-principal --username 4ec8d063-b0c6-487b-a438-4619ae760807 --password <...> --tenant 29acf139-3947-41a7-9e61-984e84ccdbce