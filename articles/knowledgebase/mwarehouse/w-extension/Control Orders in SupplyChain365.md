# Control Orders in SupplyChain365

**Control Orders in SupplyChain365**

1. *Creating Workflow*
2. *Creating purchase order*
3. *Creating Warehouse Receipt*
4. *Record license plates for orders in the mobile application*
5. *Check the created license plate in supplychain365*
6. *Control put away to check that the orders are still blocked in the mobile application*
7. *Control orders by entering the block activity line page in supplychain365*
8. *Create put away for controlled orders in the mobile application*

**Creating workflow**

first, we need to add a specific workflow for controlling the orders.

Go to business central click on the search button type workflow then open the related link.

In the workflow page click on new workflow from the template drop-down menu and select new.

Type the workflow code and description as follows and set the workflow steps

In the when event section select supplychain365 when a put-away is created

In the on condition section select any condition from the filter drop-down. For example, I am blocking by vendor number so I click on always and then select filter and type or choose vendor number after that type or select the vendor from the text drop-down menu.

In the response section select supplychain365 block created put-away

After all these steps toggle on the enable button to activate the workflow.

For more information ***click here to see the full workflow tutorial.***

**Create purchase order**

In business central click the search option, type purchase order select the related link.

Click on the new button and fill in the form.

After completing the form click on release and then create a warehouse receipt.

Note: remember the created warehouse receipt number.

**Warehouse receipt**

In the warehouse receipt page control everything and also check supplychain365 mobile settings: enable license plate recording

**Require scanning of a license plate**

Scan the license plate after pressing the stop button

After enabling these settings close the warehouse receipt page and follow the next steps

**Recoding license plates in mobile application**

Open the mobile application click on receipt process find your created receipt order and click on it.

Here click on the start license plate to see the recording option and click the first order, select location, and type quantity.

Stop the license plate recording and scan the license plate number in the barcode version.

Do the same steps in other orders in the list if needed.

**Check license plates**

In business central click the warehouse and logistics menu bar and click on the license plate from its navigation bar.

In the license plate page when you sort license plate numbers in descending order then here you can see 2 newly created license plates and the state is to put away.

**Check mobile application for blocked Put-aways**

Open supplychain365 application on mobile device then go to put away process, here we still don’t have the orders it means is okay first control the order then it will appear here.

**Open block Activity line page**

Open business central click on the search button and type block activity line open the related link.

Here you can see information about the orders that need control, so after controlling, select them all and click accept now the orders are controlled and ready for put away.

**Create put away from controlled orders in mobile application**

Open again put away the process from the mobile application main menu and scroll down for unblocked or controlled orders.

***Here you can see that the orders are ready to store. For more information on how to create put-away click here.***

![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103121645029/original/Cauoa4xoGMItsS5XkwMBjO4kuuUM0KSSnA.png?1718286981)****Below a video to understand the steps visually:****