# How the inbound process with receive works

In the video below we will show you how to create warehouse receipts using the supplychain365 mobile app for business central. We will go through all the required steps.

**What is a warehouse receipt?**

A warehouse receipt is a document that contains items that are received and sent immediately or possibly stored in the warehouse. A warehouse receipt can be made of a purchase order, a sales return order or an incoming 3PL order.

Documents must be released in business central in order to create a warehouse receipt (For more information on how to create warehouse receipts click here).

* Login to mobile device (For more information go to the video “login to supplychian365 using mobile device”)
* Enter your username and password. Use your Microsoft Account for this. Click on sign in and verify your account with Microsoft two-factor authentication if required.
* Select an environment, then select a company and click login.
* Current users are allowed to access the warehouse and transport modules regarding their role.
* Here I click on warehouse, which leads to the warehouse menu, where you can see all information regarding warehouse management.
* The numbers in the upper right corner of the menu items indicate the number of open tasks.
* Now when I click on the receipt, a new screen appears with the information regarding the header of the item.
* By *swiping right*, you can navigate to the item details. Click on the triangle icon in order to see all the item details like item number, location (which is **corebox**), external document number, weight, volume, and the quantity, which is five.
* At the bottom of the screen there is a *print button*. Click to see the printer options. Select a label, select a printer and enter the quantity to be printed. Click on print for the the label to be printed and shall be used in item. See the video at getting start about adding labels and printers.
* *Clicking on item*If you have a scanner just scan the item's code. If you don’t have a scanner, click on the item.
* See you the list select first one and chose a location select quantity all or just a part of item and click receive select or scan lot number again enter quantity and click add quantity. Here is the total quantity in this lot and here is that we selected. Click done.

Below a video to help users understand the steps visually:
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
