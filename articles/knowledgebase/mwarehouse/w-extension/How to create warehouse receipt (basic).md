# How to create warehouse receipt (basic)

In this video we will show you how to **create warehouse receipt** using the SupplyChain365 extension for business central. We will go through all the required steps.

 

**What is a warehouse receipt?**

A warehouse receipt is a form of documentation used within futures markets to ensure the quality and quantity of a particular commodity stored within an approved facility. Warehouse receipts are part of the processing of business transactions involving futures contracts for physical delivery.

**Create warehouse receipt**

Log in to business central. Under the gear icon choose my settings and choose the role of supplychain365 manager. Click ok.

Then go to warehouse and logistics and click on Purchase orders, or click on search at the top right side of the screen and type purchase orders.

Select purchase order list then.

Click on the plus icon in order to add a new purchase order.

Select a vendor and check the details like contact, Document date and due date. Entering a vendor invoice number is necessary. Here in vendor shipment number we will not show anything to vendor so we are not entering anything. For now, the status is open. The vendor shipment number is important if you're using the mobile app. For now, we will follow the process in business central.

On the lines tab, select type “item” and select a number without item tracking, like A00876. Location code is Corebox and quantity is 4. This is enough information to create a warehouse receipt and a put-away document. 

Once the information has been entered, click on release to release the document. You can now see that the document status changed from open to released.

Now click on create warehouse receipt. This is how to create a warehouse receipt.  

Now go to the warehouse & logistics menu and select warehouse receipts. In the warehouse receipt window click on home and then post receipt. You will be asked “do you want to post the receipt”. Click yes. Posting lines will be created with a put-away document. 

**Create Put-away**

Go to warehouse & logistics, select warehouse put-aways in order to see all the created put-aways.

Here, click on a put-away then select "register put-away". A message box appears with the question “do you want to register the put-away document?” Click yes in order for the put-away to be registered.

To see registered put-aways go to warehouse and logistics and select registered warehouse put-aways. Here you will see all the registered put-aways. The last one is the newly registered put-away. As a result, new stock has been created. 

 

***By this short video now you are able to make warehouse receipt very easily.***

below a video to help users understand the steps visually:
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
