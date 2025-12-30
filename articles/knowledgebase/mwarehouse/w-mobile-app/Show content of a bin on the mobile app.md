# Show content of a bin on the mobile app

In this video we introduce the hamburger menu in the SupplyChain365 mobile application.

* Click on hamburger menu and select, Bin Contents. A bin is the smallest unit of space where your items are stored.
* Here you can scan a bin and see its content or availability. Also you can enter number manually for example SHIP01.
* You can see the list of items on this bin in location CORE BOX and zone. Lets scan the code, this is the ship 01 barcode.
* *Swiping right an item*, you can navigate to the item details. Click on the triangle icon in order to see all the item details like item number, description, variant, identifier etc.
* Click on print to print the above information on a label through a zebra label printer.
* *By swiping left*, you see an item tracking icon that shows item tracking. Swipe and click on it to see the item tracking information.
* If you scan a bin without items, it shows “empty bin”. For example: bin RECEIVE-01 is an empty. When you scan it, you will see a message that the bin is empty.
* If we scan a barcode and see this message bin not found it means that we have no bin, or the bin has been deleted.

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
