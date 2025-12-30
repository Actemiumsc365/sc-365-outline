# How to create warehouse shipments (basic)

In the video below we will show you how to create *warehouse shipments* using the supplychain365 extension for business central. We will go through all the required steps.

 

**What is a warehouse shipment?**

A warehouse shipment is a document to combine more than one source document, like multiple sales orders, or other outgoing source documents like purchase return orders or outgoing 3PL orders.

**Create warehouse shipment**

Here we start the process. 

* To show the process we will use a new empty company with the demo data loaded (see getting started video).
* Log in to business central. Under the **gear icon** choose my settings and choose the role of supplychain365 manager. Click ok.
* Then go to the warehouse and logistics menu and click on sales orders or click search and type sales orders.
* Click on the **plus icon** to add a new sales order.
* Select a customer and check the details like contact, posting date and due date.
* We choose to ship an item without item tracking for example HAWX which is an item without item tracking.
* select a customer name for example K00100 .  
  then check contact, posting date, VAT date, order number and due date, you can make changes to any of these dates.  
  but in requested delivery Date you can specify the date that the customer has asked for the order to be delivered. this is not mandatory but you can set a date.  
  external document number is an important field for visibility in the mobile application, this field specify a document number that refers to the customer's or vendor's numbering system.
* This is enough information to create a shipment and a pick.
* Once the information is entered, click on release to release the document. You can see that the document status now is changed from open to released.
* Now go to Home and click on create warehouse shipment. One warehouse shipment header has been created. Click on ok in the popup message box.

**Create pick**

The next steps to take:

* On this window, which is warehouse shipment, it is possible to assign a specific user to the document and it is possible to specify an execution date and time that can be used in the mobile app. In this case we show the process without the mobile app.
* Click on create pick in order to create a pick for the item to be shipped.
* In this window you can assign a specific user id if you did not assign before and choose a sorting method, now we keep the default options. If you want to change any of these options, it will affect the pick line. So no changes and Click ok. pick line is created.

**R****egister warehouse pick**

In order to register the warehouse pick, go to warehouse and logistics select Warehouse Picks, here you see all picks, select a pick and click on register pick. Here you can register the pick. After this you can post the warehouse shipment in order to complete the shipment process.  

So this is the process on how to make warehouse shipment. Now your able to create warehouse shipment without item tracking.Below a video to help users understand the steps visually:
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
