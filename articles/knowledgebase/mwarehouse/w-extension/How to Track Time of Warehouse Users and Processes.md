# How to Track Time of Warehouse Users and Processes

**Part 1: Resources**

**How to track time of warehouse users and processes**

Before you can use SupplyChian365 time entry to manage projects, you must set up resources. Then you can track employee hours with SupplyChain365 time entry.

To set up a resource the steps are:

Create a card for each resource that you want to use in projects.

Here I have created these cards as you see the list is all-resource cards that contain: resource number, name, type, unit of measure, cost, profit, etc.

To assign a timesheet owner and approver manually:

1. Choose the New action.
2. Fill in the fields as necessary.

* Name
* Type
* Unit of measure
* Resource group, then

1. Select the resource for which you want to set up the ability to use timesheets, and then select the **Use Time Sheet** checkbox.
2. In the **Time Sheet Owner User ID** field, enter the ID of the owner of the time sheet. The owner can enter time usage on a timesheet and submit it for approval. In general, when the resource is a person, that person is also the owner.
3. In the **Time Sheet Approver User ID** field, enter the ID of the approver of the time sheet. The approver can approve, reject, or reopen a time sheet.

Note: You can't change the ID of the timesheet approver if there are time sheets that haven't been processed and have the status of **Submitted** or **Open**.

**Part 2: Time Entry**

**Time Sheet**

There are two sorts of timesheets:

1. ***Business Central timesheet:*** for more information click here.
2. ***SupplyChain365 time entry:*** this is our extension time sheet in which you can register workers. You are only allowed to create a timesheet if there is a resource linked to your user in part one of the tutorial, we have seen how to link a resource to a user. If these settings are correct, you will see this resource in the time entries list. Only then can you process the associated time entries, so that they end up on a time sheet.

**What Is Time Tracking?**  
Time tracking refers to how organizations record the working hours of hourly employees and ensure those employees are compensated accurately for their time.

Go to Business Central and select the role of SupplyChain365 Manager. Click on search and type Time Entries. Click on *SupplyChain365 Time Entries (Administration)*.

You will see that we have many entries.

Here you can see a table with many columns, which I will introduce one by one:

1. **No:**this number is created automatically by the system when a process is started.
2. **Start time:**indicates the exact time and date when a process was started.
3. **End time:**indicates the exact time and date when a process was ended.
4. **User:** indicates by which user this process has been handled.
5. **Resource:** indicates the record number of the resource that comes from the resource page.
6. **Document number:** indicates which document the time entry relates to.
7. **Process:** indicates which type of process the time entry relates to.
8. **Duration:** indicates how much time it took to finish the process.
9. **Time sheet number:** indicates the timesheet number of the resource record.
10. **Already processed:** indicates that resources or processes are approved.

With the search box, you can search through any of the properties, like names. By entering names, we see everything belonging to that specific name or enter a number to see related information about that specific number.

By clicking on manage and then delete you can delete records after selecting them. Here I select some rows click on manage and then delete. You will see that all of the selected rows have been deleted.

The entries can be processed by clicking on *Process time entries*: select a start date, and end date then select a process type whether it is picked, put away, or set blank as default. Then, click OK. Any entries within the given time frame will be processed.

****Below, a video to understand part one and part 2 tutorial visually:****
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
