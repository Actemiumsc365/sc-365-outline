# How to create replenishment tasks to execute mobile

To achieve maximum use of warehouse space, the company will need a tool to automatically detect unused space on bins and to calculate the quantity to be filled in. Additionally, the tool should simultaneously suggest from where to take these items and update the system.

Through the **bin replenishment** process, the system searches for a fixed bin content that needs to be replenished whenever the bin has reached minimum quantity. The process of replenishment is only capable for fixed and unblocked bins and must be activated manually by a warehouse employee. The program tries to find bin content of the same item and item variant within the location. The bin ranking determines from where to take the items, always searching for lower ranking bins to take from. The calculation is made to fill fixed bins that are below minimum quantity. A warehouse movement document is created that contains the replenishment lines from the requested location, zone, or bin, according to the filter options that are used.

As a result, the bin replenishment function in Business Central is based on the following conditions:

* *The item to replenish must have a fixed bin.*
* *Replenishment is done from bins with a lower ranking to bins with a higher ranking.*
* *A replenishment line is suggested when content on the bin to replenish to has reached minimum quantity or less.*
* *If enough items are on the bins to replenish from, the program suggests replenishing up to the maximum quantity that is specified on the bin content page.*

1. Go to Business Central and select the role of SupplyChain365 Manager.
2. Click on search and type movement worksheets.
3. Click on movement worksheets:
4. Click on home button then select calculate bin replenishment here you can select different options according to your needs so I let these options default.
5. In filter bin content section also, you can setup bin filter and item filter. This is the easiest way to replenish by bin code and specific item number.
6. Before pressing ok button, we will discuss about schedule button click on schedule a report button to calculate bin replenishment.
   * Here we see a form that have report id, report name, description, report output type, printer name (if available).
   * next run date formula: “when to execute this calculation for example 1w means 1 week”, earliest start date and time.
   * expiration date and time: means when this execution schedule will discontinue .
7. So go back to calculate bin replenishment and review options and filters then click ok.
8. Here you will see all items, from zone code and bin code to which zone code and bin code, quantity and other information on movement worksheet.

Now you are able to create warehouse movement from calculated bin replenishment, and this will be available on mobile devices. So this is how to create a movement worksheet from bin replenishment and execute it from a mobile device. This is how it looks on a mobile device. The last one is a newly generated movement warehouse document.

Below, a video to understand the steps visually:
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
