# Create Azure Storage account to exchange files

**To exchange files automatically using a storage account with an exchange profile:**

you can follow these steps:

1. ***Create a storage account:*** First, you need to create a storage account in Azure. You can do this by logging into the Azure portal and clicking on “Create a resource” > “Storage” > “Storage account”. Fill in the required information, such as the name of the storage account, the resource group, and the location.
2. ***Create an exchange profile:*** Next, you need to create an exchange profile in the Azure portal. To do this, click on “Create a resource” > “Identity” > “Exchange profiles”. Fill in the required information, such as the name of the exchange profile, the resource group, and the location.
3. ***Add the storage account to the exchange profile:*** After creating the exchange profile, you need to add the storage account to it. To do this, click on the exchange profile you just created, and then click on “Add a resource” > “Storage account”. Select the storage account you created earlier, and then click “Add”.
4. ***Configure the exchange profile:*** Once the storage account is added to the exchange profile, you need to configure the exchange profile to enable automatic file exchange. To do this, click on the exchange profile, and then click on “Configure”. In the “Exchange settings” section, select “Automatic file exchange” and set the “Exchange mode” to “On”.
5. ***Set up file synchronization:*** After configuring the exchange profile, you need to set up file synchronization. To do this, click on the storage account, and then click on “Blob service” > “Container settings”. Select the container you want to use for file synchronization, and then click “Save”.
6. ***Set up file synchronization rules:*** Finally, you need to set up file synchronization rules to specify which files should be synchronized. To do this, click on the exchange profile, and then click on “File synchronization” > “Rules”. Click “Add a rule” and specify the source and destination containers, as well as the file patterns you want to synchronize.

By following these steps, you can automatically exchange files between your storage account and other storage accounts using an exchange profile in Azure.