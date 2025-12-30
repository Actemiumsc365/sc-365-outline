# How to create a 3PL customer

**What is third-party logistics (3PL)?**

Third-party logistics, or 3PL, is the practice of outsourcing logistics and supply chain management functions to external service providers. These providers offer a range of services, including warehousing, transportation, inventory management, packing, incoming and outgoing bulk or single items, and order fulfillment, allowing businesses to streamline operations, reduce costs, and focus on their core competencies.

Creating 3PL customers: there are two ways to create 3PL customers.

1. By creating a new 3PL customer
   * Go to Business Central click 3pl and val navigation menu and select 3PL customers from the navigation bar.
   * Click on + plus icon to create a new 3PL Customer.
   * Enter 3PL customer information like name, address, and contact details, and scroll down till you find Supplychain365 3PL and VAL.
   * Toggle on the Enable 3PL option and choose a photo of the customer (if available).
2. By changing an ordinary customer to a 3PL customer.
   * Go to Business Central Choose the search icon, enter customers, and then choose the related link
   * Click on an ordinary Customer who is not a 3PL customer.
   * Here (is a 3PL customer) column must not checked.
   * Click on the customer and scroll down until you find the supplychain365 3PL and VAL settings.
   * Toggle on the Enable 3PL option to convert the customer to 3PL.

To create stock for a 3PL customer, it is important to do this via an incoming 3PL order. The stock is then available in the warehouse specifically for this 3PL customer. After the 3PL Customer has been created, it is possible to convert existing stock via the 3PL Stock migration function or to create new stock by creating a 3PL Inbound order.

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
  <source src="https://stsc365videodocs.blob.core.windows.net/stscct365videodocs/SupplyChain365%20Videos%20tutorials/3PL%20and%20VAL/Create%203pl%20Customer.mp4" type="video/mp4" />
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
