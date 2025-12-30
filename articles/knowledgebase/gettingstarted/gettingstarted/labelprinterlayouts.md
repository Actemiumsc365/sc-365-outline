---
title: LABEL PRINTER LAYOUTS
---
<style>
  /* This creates a general setup for THIS page only */
  p, li {
    text-align: justify;
  }
</style>
<h1 id="how-to-add-label-printer-layouts-to-supplychain365">How to add label printer layouts to SupplyChain365</h1>

<h2 id="what-is-a-label">What is a label?</h2>
<p>The most important functions of labels are to describe the product, its usage, cautions in use, and specify its contents.
Identification of the product or brand are other important functions performed by labels.</p>
<p>In the video below we will show you how to add, edit and delete labels.</p>
<p>To create your own labels you need to take the next steps:</p>
<ul>
<li>To add labels click on the component menu, select labels and then click on the new button to create a label.</li>
<li>Select a name for the label, for example: Receipt Header or Receipt line. In SupplyChain365 we have various processes like: inventory count header, inventory count line, item, license plate header, receipt header, receipt line. All of these processes have their own properties. In the receipt header process, we have many properties: Number, Location Code, Bin Code, Posting Date, and more. In the receipt line process, we have the following item properties. Source document, source number, item number, description and more. These are the item properties that can be seen on the label and that can be printed.</li>
</ul>
<h2 id="zpl-code-zebra-programming-language">ZPL Code (Zebra Programming Language)</h2>
<p>ZPL is the language used by all ZPL compatible printers. It is a command  based language that is used by the printers as instructions to create the images on the labels. Here I have the codes for the Receipt header process and the Receipt line process. To add the code, you have to make sure it is active. If it is not active, then the label will not be printed. You can make more than one label per process. When itâ€™s finished, in the preview you can see all the information on the label which comes from different processes. Save the label so you can print it later.
Note: In part 2 of the video, we will see that it is possible to create a label just by using Zebra Designer software, without any knowledge of coding. It is so easy. Just try it. We are going to create a label for the receipt header process and one for the receipt line process. How to edit and delete labels. Letâ€™s look at a label. Here we can edit a label, for example the receipt header label Click edit and change â€˜Posting Dateâ€™ to â€˜Assign Dateâ€™. Preview it and see how it has changed. When you're finished, save the current changes. You can simply delete a label by clicking the delete button. The item will be deleted permanently.</p>
<p>How to create a label with the help of software (without coding). This is in part 2 of the videos below. We use Zebra Designer to create labels and edit labels. Here are the steps:</p>
<ol>
<li>Go to <a href="http://www.zebra.com">www.zebra.com</a> and select Support and Downloads, then Printer and click on Software Support.</li>
<li>Here you find everything available for printers, such as designing barcode labels or cards, drivers, developer tools, device management and security.</li>
<li>Here we select designing barcode labels and from the drop down menu go down and click on Zebra Designer.</li>
<li>There is a lot of information about the Zebra Designer software. If you want to use this software with extra features, you must download the latest Zebra Designer with license. For now, we use the free version of Zebra Designer.</li>
<li>Scroll down till you find the zebra designer installer file with .exe extension. Download and install it.</li>
<li>The steps to install are so easy. Just follow the on-screen instructions.</li>
</ol>
<p>Create Label for Receipt Header process and Receipt Line process. In this last video below we will show you how to make a label for the Receipt Header process and a label for the Receipt line process. The steps are really simple. Just follow the on-screen instructions. In the video below we are using Zebra Designer. It's very easy and efficient.
Note: Anyone without knowledge of Z P L coding can use this software.
This area is called the header, the Receipt header. We will first make a label for this process.
This area is called the line, the receipt line. We will also make a label for this process.
Let's start the Zebra software and see how labels are made.</p>
<b>Part1: Below a video to understand the steps visually:

<script src="https://player.vimeo.com/api/player.js"></script>
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
  <source src="https://stsc365videodocs.blob.core.windows.net/stscct365videodocs/SupplyChain365%20Videos%20tutorials/SupplyChain365%20Getting%20Started/11%20Label%20Part1%20SC365%20portal.mp4" type="video/mp4" />
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
