# How to create a inventory cycle count to execute mobile?

**Create an inventory cycle count to execute with the mobile app.**

**What is Cycle Counting?**  
Cycle counting is a methodical technique to inventory management that entails routinely counting a portion of the inventory held by a company. Cycle counting focuses on continuously counting smaller groups of objects instead of typical physical inventory counts that count every item at once. This technique enables companies to maintain precise inventory levels without interfering with regular company operations or necessitating a complete shutdown.

The counting process also involves the following tasks:

* **Calculate the expected inventory.**
* **Print the report to use when counting.**
* **Enter and post the actual quantities.**

***Depending on your warehouse setup, count physical inventory in one of the following ways.***

* If your location doesn't use *directed put-away and pick*, use the Phys. Inventory Journal page. The procedure is similar to physical inventory without cycle counting.
* If your location uses *directed put-away and picks,* use the Warehouse Physical Inventory Journal page. Then use the Item Journals page to run the Calculate Warehouse Adjustment action.

### **To calculate expected inventory in basic warehouse configurations**

1. Choose the**search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Physical Inventory Journals, and then choose the related link.
2. Choose the Calculate Inventory action.
3. On the Calculate Inventory page, specify the conditions to use to create the journal lines, such as whether to include items that have zero recorded inventory.
4. Set filters if you only want to calculate inventory for certain items, bins, locations, or dimensions.
5. Choose the OK button.

### **To print the report to be used when counting.**

1. On the Physical Inventory Journal page containing the calculated expected inventory, Choose the Print action.
2. On the Warehouse Physical Inventory List page, specify whether the report will show the calculated quantity and inventory items by serial and lot numbers.
3. Set filters if you only want to print the report for certain items, bins, locations, or dimensions.
4. Choose Print.

Warehouse employees can now count inventory and record any differences on the printed report.

## **To do cycle counting**

You can count items as often as you'd like. For example, because they're more valuable, or because they're fast movers and a large part of your business. Specify the counting frequency by assigning special counting periods to the items.

Depending on your warehouse setup, you can do cycle counting in the following ways.

* If your location doesn't use directed put-away and picks, use the Physical Inventory Journal page. The steps are similar to counting physical inventory without cycle counting.
* If your location uses directed put-away and picks, use the Warehouse Physical Inventory Journal page. Then use the Item Journals page to run the Calculate Warehouse Adjustment action.

### **To set up counting periods**

Counting physical inventory is typically a recurring task, for example monthly, quarterly, or annually. You can set up the inventory counting periods you need and assign one to each item. Afterward, use the Calculate Counting Period action on the Physical Inventory Journal page to automatically create lines for the items.

1. Choose the **search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Physical Inventory Counting Periods, and then choose the related link.
2. Fill in the fields as necessary. Hover over a field to read a short description.

### **To assign a counting period to an item**

1. Choose the **search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Items, and then choose the related link.
2. Select the item to which you want to assign a counting period.
3. In the Phys Invt Counting Period Code field, select the counting period

### **To start a count based on counting periods in basic warehouse configurations**

1. Choose the **search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Physical Inventory Journal, and then choose the related link.
2. Choose the Calculate Counting Period action.

The Phys. Invt. Item Selection page shows items that need to be counted according to their counting periods.

1. Count the physical inventory.

### **To start a count based on counting periods in advanced warehouse configurations**

1. Choose the **search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Warehouse Physical Inventory Journal, and choose the related link.
2. Choose the Calculate Counting Period action.

The Phys. Invt. Item Selection page show items need to be counted according to their counting periods.

1. Count the physical inventory.

To adjust the quantity of one item

After you've done a physical count of an item, use the Adjust Inventory action to record the actual inventory quantity.

1. Choose the **search![Lightbulb that opens the Tell Me feature.](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103068145666/original/MGOXjYUYS1NLNDNmIsiBFKaHPaAtlVpsfQ.png?1701182148)****icon**, enter Items, and then choose the related link.
2. Select the item for which you want to adjust inventory, and then choose the Adjust Inventory action.
3. In the New Inventory field for the location, enter the result of the count.
4. Choose the OK button.

You can also use the Adjust Inventory action as an easy way to add purchased items to inventory if you don't use purchase invoices or orders to record your purchases.

Below, a video to understand the steps visually: