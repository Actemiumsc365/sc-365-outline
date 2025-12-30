# Block Warehouse Activity

**Block Warehouse Activity**

This function is necessary when a customer wants to inspect items before receiving them.

Sometimes, a customer wants to inspect items after they are received but before they are stored. In that case, you can create a workflow with this event and response. You can also specify a certain customer as a condition so that you only block that customer's receipts.

A blocked reception will not be shown in the supplychain365 mobile application. So, you need to go to the 'blocked warehouse activities' page in the extension (Business Central), you can click on the blocked receipt and press the accept button (at the top right) to remove the blockage. Then the receiving will be visible in the supplychain365 mobile application again.

Notes: Now, you can only block put-aways, and other warehouse activities such as picks or movements are not possible. Also, you can't block activities in any other way rather workflow.

**Activating workflow**

Create a workflow in the business central

1. open the business central and search for workflow and open related link.
2. on the workflow page click beside the new workflow from the template to see its dropdown and click New.
3. complete the page as you have seen in the image below.
4. After completing don’t forget to toggle on the enable workflow button.

This part is complete let's start creating a warehouse activity to see its effect

**Create a receipt from the Purchase order**

Create a purchase order and then a receipt from the purchase order and post it.

1. Create a purchase order select a vendor name and remember the vendor so we are going to block this vendor temporary

1. Click on Create Warehouse Receipt (1 receipt created) and post it.
2. After posting it you are not able to see it in the put-away process on the supplychain365 mobile application because it's locked or blocked.

**Unblock warehouse activity**

To unblock warehouse activity and see the put away order:

1. Open the business central search for blocked warehouse activities and click the related link
2. Here you can see the blocked warehouse activities
3. As you saw there is one blocked put away click on it and then click on the accept button on the top right of the page to complete the unblocking process.
4. Now you are able to process put away in the supplychain365 mobile application.

****Below a video to help users understand the steps visually:****
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
