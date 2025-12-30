# How to handle defects in SupplyChain365

We have seen how to add defects in mobile application, and now we are going to see all defects in *SupplyChain365*.

* Go to Business Central, and select the role *SupplyChain365 Manager*.
* Click search and type defect, You see two different defect pages, The first one is for the administration of defects and the second one is the list of defects Click on Defects Lists.
* Now you see the defects list page.
  + **Number:**indicates the defect number, which is automatically generated when creating a report.
  + **Created at:** indicates the time and date when the defect was recorded.
  + **Location:**indicates the warehouse name or in which location this defect happened.
  + **Source document number:** indicates in which process the defect happened.
  + **Source document type:** shows type of process: pick, receipt or movement.
  + **Assigned user:** shows by which user this defect was discovered or which user recorded this defect.
  + **State shows:** the status of defect. Here you see some defects are open.
* You can click on one of the open defects and click on the release tab and then release in order to release the defect document or vice versa.
* Click on one of the defect numbers and you will see the full information about the current damage with line information and all items that are reported as defective with photos.
* Here you can click to see the next photo and here the previous photo, and here you can see the total of photos. For this defect, we have 3 photos.

This was about defects and if you see defects in warehouse process for example in receipt or in put away, click on registered put away and select on of registered put away open it.

* On the warehouse put-away page, click on related above the general fast tab, then select SupplyChain365 and click on defects.
* if any defects are available. then you will see all lines here, but here we have no defects.

Below a video to understand the steps visually:
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
