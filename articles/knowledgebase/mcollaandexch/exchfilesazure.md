# Exchange files automatic by a storage account using the exchange profile

***Exchange files automatically by a storage account using the exchange profile***

To exchange files automatically using a storage account with an exchange profile.

you can follow these steps:

1. ***Create a Microsoft Azure Storage account.***
2. ***Upload document to the storage account.***
3. ***Configure Partner portal for exchange profile.***
4. ***Configure business central for EDI Document and release uploaded document.***
5. ***See the created orders in the partner portal.***

**Create a storage account**

First, you need to create a storage account in Microsoft Azure, Ask your company administrator for a storage account.

Go to Microsoft Azure Storage Explorer and upload your file here in a Blob container.

Here I have uploaded 2 documents.

**Create an exchange profile**

Next, you need to create an exchange profile in the SupplyChain365 partner portal.

To do this, go to the partner portal under company selection select a 3PL customer and select the exchange profiles button, click on the plus button or create a new profile.

**First step:**

set profile name,

document type,

and storage provider.

**Second step:**

set storage account,

container and folder.

**Third step:**

paste the connection string.

Once you have configured the profile correctly click save, and you see the status is working and has a green circle.

Once you configured the exchange profile and the storage account is added to the exchange profile, you need to configure the business central workflow for **EDI**document.

To do this, go to Business Central, click on the search button type workflow and choose the related link.

I show you how to do it and watch the steps visually.

now you need to create an inbound or outbound 3PL order.

***The steps are:***

Once you have uploaded the document to Azure storage then,

Go to Business Central and release the document to see on the partner portal.

In Business Central click on 3PL & VAL Navigation menu and select incoming 3pl order for inbound or select outgoing 3pl order for outbound.

Here you see the newly uploaded file.

click on file and release the document.

Go to the partner portal click on documents then shipment now click refresh here you see the document that was uploaded to a storage account.

By following these steps, you can automatically exchange files between your storage account and other storage accounts using an exchange profile in the SupplyChain365 partner portal.

Below a video to understand the steps visually:
<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
<script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>

<style>
  .plyr {
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<video id="player" playsinline controls data-poster="">
  <source src="" type="video/mp4" />
</video>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const player = new Plyr('#player', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      settings: ['captions', 'quality', 'speed'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 2] }
    });
  });
</script>
