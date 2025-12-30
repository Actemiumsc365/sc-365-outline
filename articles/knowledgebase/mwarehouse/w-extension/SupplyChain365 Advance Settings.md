# SupplyChain365 Advance Settings

This article is about the advanced mobile settings for locations and document types. Processes can be adjusted at location and document level: (different handling in workflow documents for, for example, a specific customer, group or 3PL reception). The adjustment is set on the location card and can be overwritten with the settings on the documents. It is possible to work with workflows to change this for specific conditions (for a specific customer for example).

![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103067635087/original/ExT3X_zKbyNpZkKFjM-mXqaM4wGb69HMLA.jpeg?1701079811)

**Receive Settings**

For the mobile receive process, the following settings can be adjusted per location or document type.

* Require receive item scan: Requires the warehouse user to scan a received item. No manual input possible.
* Scan receive bin first: Requires the warehouse user to select the bin before selecting the item.
* Batch Posting: Warehouse user can select/scan all items before posting to Business Central
* Require scan every item: Warehouse user must select/scan all items (quantity page will not be shown)
* Allow over-receipt: Warehouse user is allowed to receive more quantity than is listed.
* Enable scanning of serial numbers: Warehouse user can scan serial numbers in lines pages. This option can impact performance for large orders.
* Use Suggested CrossDockBin in receiving: If a receipt contains many items, ensure that they are placed in the same bin.
* Scanning of a serial number is required: When this parameter is enabled a user must always scan a serial number, when multiple serial numbers are available to choose from.
* Enable license plate recording: Warehouse user is allowed to record license plates using the mobile app.

**Put-away Settings**

The mobile put-away process can be adjusted on location and/or document with the following settings.

* Place all Items: Place all taken items on the same bin.
* Enable scanning of serial numbers: Warehouse user can scan serial numbers in lines pages.
* Always automatically create a put-away: Always create a put-away when the document queue processes a receipt line.
* Create a put-away when receipt complete: Only create a put-away by the document queue when the receipt is complete.
* Different Bin confirm required: When scanning a different bin when placing, you need to confirm the bin by scanning it again.
* Scanning of a Serial number is required: When this parameter is enabled a user must always scan a serial number, when multiple serial numbers are available to choose from.

**Pick Settings**

The mobile process pick can be adjusted on location and/or document with the following settings.

* Enable Batch Picking: Enable batch picking in the app. This parameter will automatically enable "Auto Open Line". Enabling "Allow Place on License Plates" is recommended.
* Create License Plates Batch Picking: Create license plates when warehouse user enters pick with multiple orders.
* Auto open Header: Automatically reserve and open a header.
* Auto open Line: Automatically reserve and open a line.
* Place all Items: Place all taken items on the same bin
* Require Scanning of Item: Require scanning of the item in the App
* Require Scanning of Item Identifier: Require scanning of the item identifier in the App. Item identifiers have to be defined for this to work!
* Enable scanning of serial numbers: Warehouse user can scan serial numbers in lines pages.
* Different Bin confirm required: When scanning a different bin when placing, you need to confirm the bin by scanning it again.
* Scanning of a serial number is required: When this parameter is enabled a user must always scan a serial number, when multiple serial numbers are available to choose from.
* Breakbulk flow required: When this parameter is enabled a user enters the flow for handling breakbulk lines when applicable.
* Show pick result screen: Show screen with stats about pick after pick is completed.
* Average Pick Time: Average time per pick line for use in pick result screen, in seconds.

**Movement Settings**

The mobile movement process can be adjusted on location and/or document with the following settings.

* Auto open Header: Automatically reserve and open a header.
* Auto open Line: Automatically reserve and open a line.
* Place all Items: Place all taken items on the same bin.
* Enable scanning of serial numbers: Warehouse user can scan serial numbers in lines pages.
* Different Bin confirm required: When scanning a different bin when placing, you need to confirm the bin by scanning it again.
* Scanning of a serial number is required: When this parameter is enabled a user must always scan a serial number, when multiple serial numbers are available to choose from.
* Automatically generate storage of complete receipts
* One task of the document Queue is to create a save when a receipt has been completely received.

It is important to have the warehouse settings on the location in Business Central right.

* You will find this on the Location Card.
* If Use Put-Away Worksheet is disabled (A put away is always made for every incoming reception), we cannot set anything for put away in the mobile settings. The options  Always automatically create a put-away or Create a put-away when receipt complete will complete) will not be available (disabled)
* If these options are disabled, you can indicate at document level (only the standard setting below) what should happen when a receipt is processed:
* You then get the same two options: Always automatically create a put-away or Create a put-away when receipt complete
* It is only possible to choose one of the two options, because they are opposites of each other.
* This can then be adjusted at document level and will be applied by the document Queue where necessary.
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
