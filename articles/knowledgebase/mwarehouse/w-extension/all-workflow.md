# All Workflow in SupplyChain365

**What is workflow?**

A workflow is a series of activities needed to complete a task. Workflow automation shifts the execution of those activities from humans to software.

**To automate a workflow**

To automate a workflow, an organization first identifies the tasks that make up the job. Next, it creates the rules and logic that govern how those tasks should be done. Finally, it programs the software with the predefined business rules and logic.

The rules and logic are often a series of if-then statements that act like instructions telling the program what actions to take and how to move from one task to the next. The software uses those rules and logic to perform the series of tasks from start to finish, so that humans no longer need to handle the job.

***Workflow automation examples in Business Central:***

Below are five examples of tasks that workflow automation can handle in SupplyChain365:

1. ***Create warehouse receipt, when an incoming 3PL order is released.***
2. ***Create incoming 3PL order, when and outgoing 3PL order is released.***
3. ***Create Document from EDI Document when EDI Document is added.***
4. ***Create transfer warehouse receipt when a transfer shipment is posted.***
5. ***Create warehouse shipment when a transfer order is released.***

**How to use workflows in the warehouse process**

Go to Business Central, select the role of Supplychain365 manager. Click on search and type workflows. Select Workflows (Lists) and you will see that currently we have  different workflows, but we can add more workflows or remove current workflows.

The workflows are:

**3PL Receipt:  in 3PL receipt workflow screen you see:**

* Code represents name of workflow.
* Description shows more information about the workflow.
* Category assign the current workflow for a specific user.
* Enabled: you must enable a workflow to use it in SupplyChain365

In workflow steps we have

* When event: Specifies the workflow event that triggers the related workflow response.
* On Condition: Specifies the condition that moderates the workflow event that you specified in the Event Description field. When you choose the field, the Event Conditions window opens in which you can specify condition values for predefined lists of relevant fields.
* Then response: Specifies the workflow response that is that triggered by the related workflow event.

As a result: by enabling the workflow option, When an incoming 3PL order is released without any condition then create warehouse receipt.

**3PL-Incoming: in 3PL incoming workflow screen you see:**

* Code represents name of workflow.
* Description shows more information about the workflow.
* Category assign the current workflow for a specific user.
* Enabled: you must enable a workflow to use it in SupplyChain365

In workflow steps we have

* When event: Specifies the workflow event that triggers the related workflow response.
* On Condition: Specifies the condition that moderates the workflow event that you specified in the Event Description field. When you choose the field, the Event Conditions window opens in which you can specify condition values for predefined lists of relevant fields.
* Then response: Specifies the workflow response that is that triggered by the related workflow event.

As a result: by enabling the workflow option, When an outgoing 3PL order is released without any condition then create incoming 3pl order.

**EDI - Documents: Electronic Data Interchange – or EDI** – is the secure, automated exchange of electronic documents, such as purchase orders, invoices and delivery notes, between businesses or trading partners using a standardized format that allows different computer systems to communicate with each other.

in Edi Document workflow screen, you see:

* Code represents name of workflow.
* Description shows more information about the workflow.
* Category assign the current workflow for a specific user.
* Enabled: you must enable a workflow to use it in SupplyChain365

In workflow steps we have

* When event: Specifies the workflow event that triggers the related workflow response.
* On Condition: Specifies the condition that moderates the workflow event that you specified in the Event Description field. When you choose the field, the Event Conditions window opens in which you can specify condition values for predefined lists of relevant fields.
* Then response: Specifies the workflow response that is that triggered by the related workflow event.

As a result: by enabling the workflow option, when an outgoing 3PL order is released without any condition then create incoming 3pl order.

**Transfer: in transfer workflow screen you see:**

* Code: represents name of workflow.
* Description: shows more information about the workflow.
* Category: assign the current workflow for a specific user.
* Enabled: you must enable a workflow to use it in SupplyChain365

In workflow steps we have

* When event: Specifies the workflow event that triggers the related workflow response.
* On Condition: Specifies the condition that moderates the workflow event that you specified in the Event Description field. When you choose the field, the Event Conditions window opens in which you can specify condition values for predefined lists of relevant fields.
* Then response: Specifies the workflow response that is that triggered by the related workflow event.

As a result: by enabling the workflow option, when a transfer shipment is posted without any condition then create transfer warehouse receipt.

**Transfer – Ship: in transfer - ship workflow screen you see:**

* Code: represents name of workflow.
* Description: shows more information about the workflow.
* Category: assign the current workflow for a specific user.
* Enabled: you must enable a workflow to use it in SupplyChain365

In workflow steps we have

* When event: Specifies the workflow event that triggers the related workflow response.
* On Condition: Specifies the condition that moderates the workflow event that you specified in the Event Description field. When you choose the field, the Event Conditions window opens in which you can specify condition values for predefined lists of relevant fields.
* Then response: Specifies the workflow response that is that triggered by the related workflow event.

As a result: by enabling the workflow option, when a transfer order is released without any condition then create warehouse shipment.

Create new workflow!

*There are three different ways in business central which you can create a workflow.*

1. New workflow from template
   1. The templates provide a fast way to create flows, because the trigger and some actions are automatically created and configured for you. Templates are also a good way to learn how to build your own flows.

There are several templates that cover most of the entities in Business Central, like customers, items, sales orders, and so on. Each template is typically specific to the records in the page's source table. So, for example, if you create a flow based on the template named Block the selected customer in Business Central, the flow will appear on customer related pages, like Customers list and Customer card.

1. Copy workflow.
   1. Simply copy existing workflow. Click on one of the workflows and select drop-down menu beside of new workflow from template. Make your changes. So now we have a copy of currently selected workflow.
2. New: to create an instant flow, complete the following steps:
3. Add a new flow from Business Central:

* Sign into Business Central.
* Click on search icon and type “workflow”.
* In the workflow screen, select New From new workflow from Template drop-down menu then click New.
* The workflow page opens and fill in the form:
* Code represents name of workflow. Type WAREHOUSE-PICK
* Description shows more information about the workflow. Type WAREHOUSE-PICK
* Category assign the current workflow for a specific user. Keep it blank.
* Enabled: you must enable it to use it in SupplyChain365

**In workflow steps we have**

* When event: click on chose a value, scroll down, and select Supplychain365: when a warehouse pick for a shipment is registered.
* On Condition: by default, it set to be always, but you can make changes on it. And here I set the value to default.
* Then response: click on select response and in chose a value I select show message and type my message “Pick Registered Successfully☺”.
* Close the window.
* Create new warehouse shipment
* Create pick for item to be shipped
* And register the pick to see the workflow.

**Note:** Don’t forget to turn on “enable” option in the workflow page.
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
