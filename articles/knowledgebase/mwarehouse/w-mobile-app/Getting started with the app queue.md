# Getting started with the app queue

In the video below you find more information about the app queue. The app queue makes it possible to buffer orders while the warehouse employee is excute documents.

* Click on hamburger menu and select, App queue.
* here you can see all the application queues. By swiping right, you can see if the queue has an error.
* Here we see the last one has 2 errors; swipe right click on errors and see list of errors with error reasons.
* On the right side there is an indication of the status of the queue. It shows whether it is complete, not completed or retry. If completed that is good news we have no problem, but if it is not complete or indicate pending, swipe left click retry, the system checks if the problem is still available or resolved.
* but if it is not complete or indicate pending, swipe left click retry, then you will see that our current process show pending.
* now the system checks if the problem is still available or resolved.
* during a short time the process will change to complete .
* click on clear to clean the screen. you see that all other completed process ware clean but pending and uncompleted process are still here, waiting to be complete.

***below a video to help users understand the steps visually:***
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
