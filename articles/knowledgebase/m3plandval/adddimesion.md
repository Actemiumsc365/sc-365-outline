# How to Add Dimensions for Items

**Dimensions in Business Central**

In Business Central, dimensions are used to categorize business data and provide the ability to filter, group, and analyze information. Dimensions allow for a more detailed analysis of financial data by providing additional context to transactions. They can be used to track specific attributes such as Handling, Size, Weight, or Color.

Go to Business Central click on the search icon type dimension and select dimension administration.

Here you see 3 types of dimensions so you can add a new dimension or remove the current dimension if it is not used in budget entries.

* **Code:** indicate code of dimension.
* **Name:** indicate the full name of the dimension.
* **Code Caption:**it’s a caption for a dimension code.
* **Filter caption:** show a caption on dimension filtering.
* **Description:** provide more information about dimensions.
* **Blocked:** indicates that the dimension is active or inactive.
* **3PL invoice:** can be used in 3pl invoice or not.

This is the general information about the dimensions and if you would like to see the value of dimension click on dimension and then choose dimension value.

* Here you see different dimension values for different dimensions.
  1. **Handling:**has easy, hard, and normal dimension values.
  2. **Size:** has large, medium, and small dimension values.
  3. **Weight:** has heavy, light, and medium dimension values.

**How to add dimension to an item?**

Here is how to add dimension to an item go to Business Central:

* Select warehouse and logistics.
* Select items (select the item to which you will add dimension)
* On the item card page click on the item then the dimension
* Here you select different dimensions for the item
  1. **Handling:**easy, hard, and normal
  2. **Size:**large, medium and small
  3. **Weight:** heavy, light, and medium
* After adding dimensions close the page and now the item has three different dimensions.

Add price to dimension.

* Select 3PL and VAL.
* Select 3PL customer and select a 3PL customer card.
* On the Customer card page scroll down till you see 3PL Activity prices
* Select a service number and type for warehouse activity.
* Here you select the dimensions for the activity.
* And here enters the price for the dimension and warehouse activity.

*Below a video to understand the steps visually:*
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
