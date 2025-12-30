# Understand the app queue and sessions

**Part1**

**What is the app queue in the SupplyChain365 extension?**

A line or sequence of processes awaiting their turn to be attended to or to proceed.

The App Queue process in Business Central:

Go to Business Central and select role Supplychain365 Manager. Click on search and type application queue. You see SupplyChain365 Application Queue Click on it and you will see that we have many queues.

Here you see various properties:

* queue type indicates in which process we are.
* document type indicates which document type is currently in the queue.
* document number,  indicates the  document number of the current queue,
* queue status  indicates the current status of the queue. There are three types:
* pending: just wait until it's completed
* retry: if queue fails, retry it from here and wait for the result
* completed: when a queue is completed it will no longer show up here. It will automatically disappear from the application queue page.
* queued by: shows by which user the queues were done.

**Note:** processes are executed by warehouse workers with mobile devices. Here in the application queue you have the general information regarding each user, process and process status.

**Part2**

**What is a warehouse session in the SupplyChain365 extension?**

A session is a group of user interactions with SupplyChain365 that take place within a given time frame. For example, a single session can contain multiple receipt, put away, movement, and picking actions.

1. Go to Business Central and select role SupplyChain365 manager.
2. Click on search and type session. Now see you Warehouse Session List. Click on it in order to see the list of sessions.
3. Here we have some titles to understand the current session.
4. Activity type: indicates that the current users are now busy with picking and receive, with these specified numbers and no one else can open these numbers.
5. Document number: indicates in which document number or numbers users are busy with, and these numbers are just specified for current process and current user, and no one else can enter this session with the same number and process.
6. Document line number: indicates the line numbers of the current processes.
7. User indicates: how many users are in current session and operating these tasks.
8. Group: indicates the group of users currently working.
9. Session start: indicates when the current session started, including the date and time of the session.
10. Queued: indicates which processes are in line.

Part1: Below a video to understand the steps visually: 

Part2: Below a video to understand the steps visually:
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
