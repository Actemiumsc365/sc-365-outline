# How to get insight in stock information for a 3PL customer

Open the partner portal and under company selection, you see different links connected with different customers or vendors.

Select a link that connects with 3PL customers.

Now we have access to stocks

Here we have an overall view of our product, location, and item tracking with license plates.

Once you make a change it's good to press the refresh button to update with the latest changes.

Here you see the Microsoft Excel button: by clicking this you can export a complete document to a Microsoft Excel worksheet and print it or send it to someone via email.

* Items: click items under stock to see item details like,
  1. Item number
  2. Description
  3. Location code
  4. Unit of measure code
  5. Serial number
  6. Lot number
  7. Variant code
  8. Quantity per unit of measure
  9. Quantity
  10. Quantity incoming 3PL
  11. Quantity outgoing 3pl
  12. Invoice
  13. Item vendor number
* License plates: click license plates under stock to see the information, maybe in one license plate we have one or more items of different kinds.
  1. Number
  2. Description
  3. Location
  4. State
  5. Internal id
  6. External id
  7. GS1

By Expand all you see all related items to the license plate

By collapse, all related items to the license plate will be collapsed.

* Location: Here, you'll be able to see current warehouse locations, their addresses, and a map of where a 3PL customer has their items stored.

This is a complete insight into 3PL customer stocks.

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
  <source src="https://stsc365videodocs.blob.core.windows.net/stscct365videodocs/SupplyChain365%20Videos%20tutorials/SPP%20Collaborate%20and%20Exchange/Stock%20in%203PL.mp4" type="video/mp4" />
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
