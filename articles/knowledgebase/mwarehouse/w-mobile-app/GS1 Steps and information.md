# GS1 Steps and information

**GS1**

Global standards

**Table of codes used in SupplyChain365 GS1-EAN(128)**

|  |  |  |  |
| --- | --- | --- | --- |
| **No** | **Code** | **Name** | **Description** |
| **1** | 00 | SSCC | Serial Shipping Container Code |
| **2** | 02 | GTIN | Global Trade Item Number |
| **3** | 10 | BATCH/LOT | LOT0001234 |
| **4** | 11 | PRODUCTION DATE | 12-05-2025 |
| **5** | 12 | DUE DATE | 21-05-2025 |
| **6** | 13 | PACK DATE | 18-05-2025 |
| **7** | 15 | BEST BEFORE | 28-12-2027 |
| **8** | 17 | EXPIRATION DATE | 30-05-2028 |
| **9** | 37 | QUANTITY | 05 |
| **10** | 91 | CUSTOMER | Drone R us (K00100) |

Note: an explanation for the above abbreviations:

* **GS1:** Global Standard 1, an international standards organization with member bodies in more than 100 countries worldwide (GS1 US, GS1 CANADA, GS1 FRANCE, etc.).
* **SSCC:** Serial Shipping Container Code can be used by companies to identify a logistic unit, which can be any combination of trade items packaged together for storage and or transport purposes; for example, a case, pallet, or parcel.
* **GTIN:** Global Trade Item Number can be used by a company to uniquely identify all its trade items. GS1 defines trade items as products or services that are priced, ordered, or invoiced at any point in the supply chain. See how GTIN works.
* **EAN:** stands for the European Article Number, also named IAN (International Article Numbering). An international standard numbering and barcode system used primarily in retail applications developed by EAN International, compatible with the U.S Universal Product Code.

**Side Menu GS1**

**Note:** Before using GS1 you must activate GS1 scanning in Business Central then you can use it in the supplychain365 mobile application.

**Steps to active GS1 in Business Central:**

1. Open business central
2. Go to the warehouse and logistics navigation menu and select locations from its navigation bar.
3. Select a location that you want to active GS1
4. Scroll down till you see supplychain365 mobile settings and then on receive settings toggle this option on 
   1. Allow scanning GS1-128 barcodes

**Read GS1 Barcode: to read barcodes in GS1 format in supplychain365 follow these steps:**

1. First you must active the GS1 in the business central
2. Open the supplychain365 application
3. Login with your credentials
4. Select company and environment
5. Enter the warehouse to see the warehouse main menu page
6. Click on the kabab menu on the top-left of the screen and click on read GS1 barcode
7. With a handed scanner or device now scan any standard SSCC or GS1 code
8. Here I create a bar code with Bartender software and then scan it to see how it works.

Be with us till the end of the video.

**Receive Process GS1**

**Note:** Before using GS1 and SSCC code you must activate some settings in Business Central then you can use them in the supplychain365 mobile application and Business Central extension.

Steps to activate GS1 and SSCC in Business Central:

1. Open business central
2. Go to the warehouse and logistics navigation menu and select locations from its navigation bar.
3. Select a location that you want to active GS1 and SSCC
4. Scroll down till you find supplychain365 mobile settings and then on receive settings toggle this option on 
   1. Allow scanning GS1-128 barcodes
   2. Ask to scan SSCC code
   3. Require the scanning of an SSCC code
   4. Enable license plate Recording

*****Steps to use GS1 and SSCC in the supplychian365 mobile application:*****

1. First you must activate the GS1 and SSCC options in business central
2. Open the supplychain365 mobile application
3. Login with your credential
4. Select company and environment
5. Enter the warehouse to see the warehouse main menu page
6. Click on the receipt process and select the order from the list
7. On this page click on the start license plate to start the LP recording
8. Scan the GS1 code as shown on the pellet or box.
9. Select bin location and click on stop license plate to stop LP recording.
10. A popup textbox appears and you must scan the SSCC code, after that scan the license plate barcode, and close.

**How you can find License plate information in Business Central**

Open Business Central search for the license plate and click the related link

On the license plate page click on the left side on the number to change its order to descending so you can see lastly created license plates. Here is the scanned license plate number, click it to open yes here is the internal identifier that we have scanned and the SSCC code also scroll down to see all information about the item.

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
