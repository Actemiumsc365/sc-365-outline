# How to Add Costs and Dimension for Specific Warehouse Activities and Item

**Add costs and dimensions for specific warehouse activities**
Go to Business Central select navigation menu **3PL and VAL** and from the navigation bar select 3PL customers.

Here you see all 3PL customers select one customer to add cost and dimensions.

This is a general fast tab, scroll down till you find the **Superdesk** **3PL and VAL** fast tab.

Toggle on enable 3PL option if not enabled.

**On 3PL activity** prices you see a list of warehouse activity like:

1. **Service:** indicate service code.
2. **Service description:** indicates which sort of warehouse service is this, whether is it a warehouse or transport service or whatever else it is.
3. **Type:** indicate for which process is this service here you see a list of all processes like pick, put away, storage, movement, receipt, ship, etc.
4. **Dimension:** indicate dimensions for current activity like size, weight, and handling. Dimension value, according to dimension, you can select its value, for example, size dimension include large, small, and medium sizes. if the size is small the price is low if the size is large or medium the price will be higher.
5. **Sales price:** indicate the price for activity per day. you must set the price according to its dimension.
6. **Sales unit of measure:** indicate measurement for an activity like box, piece or carton.

**On 3PL items** you see a list of items with different variants and descriptions:

**Item number:** this is the number of 3PL items.

**Variant code:** this is a variant of the item like red, Black, etc.

**Description:** describe the item details.

These are the steps on how to add cost and dimension for a specific warehouse activity.

**Below a video to help users understand the steps visually:**

<script src="https://player.vimeo.com/api/player.js"></script>
<link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
<script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>

<style>
  /* Optional: Add a shadow to make it pop */
  .plyr {
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /* Fix for text alignment inside player not affecting outside text */
  .plyr p { text-align: left; } 
</style>

<video id="player" playsinline controls data-poster="">
  <source src="https://stsc365videodocs.blob.core.windows.net/stscct365videodocs/SupplyChain365%20Videos%20tutorials/3PL%20and%20VAL/Add%20costs%20and%20dimensions%20for%20specific%20warehouse%20activities.mp4" type="video/mp4" />
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