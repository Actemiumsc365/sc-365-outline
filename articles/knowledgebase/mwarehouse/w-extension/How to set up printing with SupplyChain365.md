# How to set up printing with SupplyChain365

Printing documents and reports from Business Central is an important task for business users. You'll typically want to send print jobs directly to one of your organization's printers no matter the Business Central client or app you're using. Because Business Central online is a cloud service, it can't directly reach local printers connected to users' devices, but you can connect it to cloud-enabled printers.

**Setting up Universal Print printers**

Universal Print is a printer management solution available as a cloud service from Microsoft. With this feature, you can set up your printers in Universal Print, then register them for use in Business Central. This feature requires a Universal Print subscription and the Universal Print Integration extension.

Universal Print is a Microsoft 365 subscription-based service that runs entirely on Microsoft Azure. It gives you centralized printer management through the Universal Print portal. Business Central makes printers set up in Universal Print available to client users through the *Universal Print Integration*extension.

The complete setup requires you to work in both Microsoft Azure, using the Azure portal, and in Business Central. The setup is divided between two main tasks as described in this article:

1. ***I******n Microsoft Azure, set up Universal Printer and add the printers you want to use in Business Central***

**To a print share:**

* Go to http://portal.azure.com login in with your Microsoft account.
* In search bar search for universal printer
* Click download connecter after downloading click install.
* After installation finished, click on lunch.
* Click login select organization account.
* Here you see a printer is available tick mark it and click on register.
* After a few second the printer appears on registered printer area.
* And its registered and not shared to share it than, go to portal clicks on universal printer and select printers, here select the printer, and click on share.
* Now you see that the printer is shared with everyone on the network.

1. ***In Business Central, click on search icon and type printer management and click the related link.***

* In printer management page click on universal printer
* Click on add all universal print printers.
* Click next and next once again next and that is it.
* Click on finish.

This is how to add universal print printer and now your local printer is connected to cloud and everyone with permission can use it. Herewith links with more information about Universal Printer:

https://portal.azure.com/#view/Universal\_Print/MainMenuBlade/~/Overview

https://www.microsoft.com/en-us/microsoft-365/windows/universal-print?wt.mc\_id=d365bc\_inproduct\_page

Below a video to help users understand the steps visually:
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
