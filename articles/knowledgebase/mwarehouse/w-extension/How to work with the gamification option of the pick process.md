# How to work with the gamification option of the pick process

Here we will describe how to work with the gamification of the pick process. Here the steps to get a happy face:

* Choose the search icon, enter locations, and then choose the related link,
* Choose the location CORE BOX in locations page,
* Scroll down for advance Supply Chain 3 65 mobile settings,
* On pick settings enable show pick result screen,
* Enter 10 second on average pick time,
* Now we are switching to mobile device and operating from there.
* On Mobile screen with Pick time shorter than 10 second,
* Login to supply chain 3 65 mobile application,
* Select Warehouse CORE BOX as location,
* Click on picking,
* Select order to pick,
* Then select bin and then click next,
* Select quantity and click pick,
* Select lot number and serial number, and click assign quantity,
* select bin to place the item and click on place.
* the goal is to see which warehouse worker, work fast and not wasting time on picking.
* now he is happy and says you performed faster than average!
* this warehouse worker is fast and not wasting his or her time on picking.

To check the sad face you can follow the next steps:

* next part with unhappy face, on Mobile screen with Pick time longer than 10 second.
* Login to supply chain 3 65 mobile application,
* Click on picking,
* Select order to pick and wait for 1 or two second,
* Then select bin and wait for some seconds then click next,
* Select quantity and click pick, wait for 1 or two second
* Select lot number or serial number, and click assign quantity and wait for 1 or two second
* then select bin to place the item and click on place.
* the goal is to see which warehouse worker, work fast and not wasting time on picking.
* and now at the end screen, you can see that the time is longer than the normal time to spend on picking, and the device says you performed slower then average and he is unhappy with picking.

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
