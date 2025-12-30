# How to get a report with all the activity and storage costs in a specific period

***how to get a report of all activity and storage costs in a specific period***

To create a report of all activity for a specific period the steps are:

go to business central.

Select 3PL and VAL navigation menu,

Then select VAL report from the navigation bar

In the VAL report page we have three parts,

***The first part is General:*** here you can select the start date and end date for a specific location to be included in the report.

***The second part is Customer:*** select the customer number and dimension.

***Third part is 3PL activity:*** select service code, activity type whether it is pick, ship, storage or put away and activity dimension whether it is weight, handling or size, and activity dimension value whether it is heavy, light or medium and the last one, select unite of measure code, if it is piece or pallet.

**Note:** these are all selective values you can enter a value or set them blank no problem, but you must enter a value for start date and end date that is necessary.

in this scenario i keep default values or set them all blank.

Here i select start date and end date then choose location core box and click okay.

You will see a VAL report list that include all information regarding the selected date with selected location or warehouse.

click search to find specific location, activity, customer or dimension,

enter the value in search box and you see the result.

to see 3PL invoice Ledger,

Click on reports.

Select VAL reports specification.

This is a 3PL Invoice ledger with complete specifications.

*These columns are important in invoice ledger:*

* **Customer Name,**
* **invoice Number,**
* **Invoice Line Number,**
* **Activity Type,**
* **Item Number,**
* **Variant Code,**
* **Description,**
* **Dimension Code,**
* **Dimension Value,**
* **Quantity**and**Invoiced**columns are important columns.

In this invoice report ledger you see a colorful list:

**What is the meaning of different color in this ledger?**

**Green color lines:** these rows with green color are invoiced,

**Red color lines**: these rows with red color are not invoiced, when they are invoiced then they will be changed to green.

**Black color lines:** shows normal lines that are waiting to be paid or the payment needs to be accepted or rejected.

****below a video to help users understand the steps visually:****
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
