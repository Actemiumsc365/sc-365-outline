# How to create items for a 3PL customer

Below there is a video of the 3PL Customer. The steps to take to create items for a 3PL customer:

* Go to Business Central and choose warehouse and logistics navigation menu and then choose items.
* Click on the plus + button to create a new item, in the item card page fill in the form for example name, and description, and in item category code select 3PLNormal.
* On the right side click on picture and import picture from your computer.
* In costs and posting determine the unit cost price and define other options as you would like.
* In prices and sales determine the unit price for selling the item.
* In item tracking select item tracking code to serial and serial numbers to an item.
* If you would like to assign the item to a 3PL customer scroll down till you see Supplychain365 3PL and VAL settings and select 3PL customer close the item card and the card is visible at the end of items.

Now it is possible to add items in the warehouse for a 3PL Customer:

* Go to Business Central choose 3pl and VAL from the navigation menu and select the incoming 3pl order from the navigation bar.
* Click on plus + icon to create new incoming 3pl order.
* Fill in the form select 3PL customer, select location, if necessary, select external document number, and the promised receive date.
* In the line select the linked item and enter the quantity then click item tracking lines and click assign serial numbers enter the quantity by default it selects the quantity you entered in the line. And click ok, you see that we have lines with serial numbers. Click close to save the process.
* Release the document and then Create a warehouse receipt,
* In the warehouse receipt page click on the home button and then post receipt, you will see that a source document is posted, and a put-away activity is created. Click ok.
* Click the search icon type items and choose the related link.
* On the items page, you can see that we have the specified number of items in here.

**Below a video to help users understand the steps visually:**
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
