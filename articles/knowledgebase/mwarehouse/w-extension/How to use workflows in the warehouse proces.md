# How to use workflows in the warehouse proces

**In this video,**  
How to use workflows in the warehouse process.

Workflow automation examples in Business Central.

Create new workflow. 

**What is a workflow?**  
A workflow is a series of activities needed to complete a task. Workflow automation shifts the execution of those activities from humans to software.  
To automate a workflow, an organization first identifies the tasks that make up the job. Next, it creates the rules and logic that govern how those tasks should be done, Finally.  
it programs the software with the predefined business rules and logic.  
The rules and logic are often a series of if and then statements that act like instructions telling the program what actions to take and how to move from one task to the next.  
The software uses those rules and logic to perform the series of tasks from start to finish, so that humans no longer need to handle the job.  
**Workflow automation examples in Business Central:**  
Below are five examples of tasks that workflow automation can handle in SupplyChain365,

1. *Create warehouse receipt, when an incoming 3PL order is released.*
2. *Create incoming 3PL order, when and outgoing 3PL order is released.*
3. *Create Document from EDI Document, when EDI Document is added.*
4. *Create transfer warehouse receipt when a transfer shipment is posted.*
5. *Create warehouse shipment when a transfer order is released.*

**How to use workflows in the warehouse process,**

Go to Business Central, select the role of SupplyChain365 manager, Click on search and type workflows,

Select Workflows, Lists and you will see that currently we have different workflows, but we can add more workflows or remove current workflows.

**Create new workflow.**

There are three different ways in business central which you can create a workflow.

New workflow from template,

**Copy a workflow,**

create New workflow, to create an instant new flow, complete the following steps,

**Add a new flow from Business Central:**

1. Sign into Business Central.
2. Click on search icon and type, workflow.
3. In the workflow screen, select New From new workflow from Template drop-down menu then click New.
4. The workflow page opens and fill in the form:
5. Code represents name of workflow. Type WAREHOUSE-PICK
6. Description shows more information about the workflow. Type WAREHOUSE-PICK
7. Category assign the current workflow for a specific user. Keep it blank.
8. Enabled, after you set workflow steps then you must enable it to use it in SupplyChain365, In workflow steps we have,
9. When event, click on chose a value, scroll down, and select SupplyChain365, when a warehouse pick for a shipment is registered.
10. On Condition, by default, it set to be always, but you can make changes on it. And here I set the value to default.
11. Then response, click on select response and in chose a value I select show message and type my message,
12. Pick Registered Successfully!
13. Close the window.

**Create new warehouse shipment**

**Create pick for item to be shipped**

And **register the pick** to see the workflow.

**Note:** Don’t forget to turn on “***enable***” option in the workflow page.

here you see the message that we have been set in workflow. it means our workflow works as it should.

below a video to help users understand the steps visually: