# Pack and Ship

**What is Pack and Ship**

Pack and ship are exactly as it sounds. It is the process of collecting the right items for an order (*or orders*), putting them into a box and/or packing materials, and then shipping them off to the customer. Sometimes this is shipment by shipment and sometimes in a bulk fashion.

**Preparations**

To make packing work properly, a few things need to be prepared. This is all done by the demo data.

* Setup Item category for packaging materials
* There must be an item category for packaging material, and it must contain one or more items.
* You can optionally set the**GTIN** or identifier, you can scan for the **GTIN**, Number, or Identifier.
* This category must then be set on the Warehouse Setup
* Report Selection
* To print the packing list, the package report must be linked within BC.
* Go to Business Central and click on the search button.
* Type custom report layout and select the related link.
* In custom report layouts you can see two different types of reports one is Microsoft Report Builder (RDLC) and the second is a Word Document.
* So these reports are very well featured because you can export the layout and make your changes then import the layout. This is one of the most important features of this kind of report.
* Custom report layout

**Packing Conditions**

However, there are several conditions that a warehouse shipment must meet before you can go to this screen:

1. The warehouse shipment must have been picked up. Depending on the 'Shipping Advice' set on the order(s). If there is an order that must be Completely picked up on the warehouse shipment, then the warehouse shipment must be completely picked up before you can start packing.
2. If 'Shipping Advice' is partial, you can also go packing if it has not yet been completely picked.
3. You can never go to packing if nothing has been picked for the warehouse shipment yet.
4. You also cannot go to packing if the warehouse shipment is completely loaded with the Load functionality.

**Packing steps on business central**

Go to Business Central, open the warehouse and logistic navigation menu, and then click on the warehouse shipment navigation bar.

**Note:** There are two different ways to go to the pack and ship page:

1. first, you need to go to the warehouse shipment list.
2. The second way is to open a warehouse shipment.

On the right side of the screen in warehouse shipment lists, you notice that the pack and ship button is deactivated, it is because the order must meet the minimum requirement of pack and ship to be processed.

As a user guide, a check mark has been added to the warehouse shipment list that indicates whether a warehouse shipment is ready for packing or not.

* Select an order that has a checkmark for pack and ship.
* Click on pack and ship above the order under the navigation bar.
* Once the pack and ship page for a specific order opens then go to the next step.

**Packing flow and barcodes**

When you are in the packing process you will first see a screen that asks how many packages you think you will use for each order. This will be printed on the shipping label or labels.

If you leave it 0 for 'estimated packages', the packing will not start until you enter the package number E.g. (1 or 2) then the packing screen opens.

You can complete the packing process with barcodes.

1. Enter the package number for example 1.
   1. Scan a package regarding your package size (PB1002), the meaning of this number is that you can choose your package size, and this packing slip ( PB1001) is the smallest package size and this packing slip indicates (pb1010) the largest package size.

**Note:**  there is a ***tool-tip!*** for every process that you're going to do on the top of the pack and ship page under the order number.

1. Scan the item or license plates that would be inside the package.
2. If the items have tracking information, then you will be able to see them here.
3. Here you can also see the information about the license plate, item number, item name, and other information such as the unit of measure, quantity to ship, etc.
4. When you have done all these steps then Click on Done Package or scan the barcode of the done package. Once everything is good then Clear the package by clicking its related button or scan the code.
5. After all packages are scanned then click on ReadyToShip button or scan the ready-to-ship barcode.
6. So if you would like to start a new package process click delete all or scan delete all barcodes to start a new process for packing the packages.

**What is the Sendcloud?**

Sendcloud is an all-in-one shipping platform for e-commerce that accelerates international growth.

**What does Sendcloud do?**

Sendcloud is a shipping platform that helps e-commerce businesses streamline operations related to delivery tracking, checkout, and order management. It is fully available in Supplychain365.  Using Sendcloud we can print package labels for different carriers (PostNL, DHL, UPS, etc.). To work with Sendcloud it must be enabled in the warehouse setup. The login details must also be entered correctly. The party must provide private and public keys to access and change information.

***below a video to help users understand the steps visually:***