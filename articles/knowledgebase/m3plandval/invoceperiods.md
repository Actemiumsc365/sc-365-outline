# How to create an invoice of a period with all activities and storage costs with specification

**Make an activity- and storage-specific invoice for the specified length of time**

To create an invoice for a specific period the steps are:

* Go to Business Central.
* Select the 3PL and Val navigation menu
* Then select sales invoice from the navigation bar
* In the sales invoice list page, you see all invoices, to create a new invoice
* Click on the **Plus (+)** button or the new button.
* This page is a sales invoice page for a specific customer.
* Select the customer’s name and the rest information autofill in the form. (Webshop drone.nl)

Note: the customer must be a 3pl customer otherwise you can not prepare 3pl invoice.

* Once you select the customer click on the prepare button at the top of the page to see the prepare 3pl invoice
* Click on prepare 3PL invoice.
  1. **Select the start date:**from which the invoice period starts.
  2. **Select the end date:** from which the invoice period stops.
  3. **Select location:** select the warehouse location to include in the invoice
* Click ok then you will see if there is no invoiced activity (if available) close it.
* In lines you see the full invoiced items with tax, quantity, discount, etc.
* Now you can release the document and post it.
* The invoice is posted and now it is located in posted sales invoices window
* The message box asks you to open the posted invoice or not click yes to see the invoice headers and lines.

****below a video to help users understand the steps visually:****
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
