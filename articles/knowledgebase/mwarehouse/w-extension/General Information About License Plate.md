# General Information About License Plate

**License Plates**

**TABLE OF CONTENTS**

* What is a License Plate?
* What is License plating?
* SupplyChain365 License Plate States
* SupplyChain365 License Plates Settings
  + Points be remember about License Plates in SupplyChain365 (Extension)
  + Points be remember about License Plates in SupplyChain365 (APP)
* License plates list page
* License plates Settings
* License plates Mutation Orders page

## **What is a License Plate?**

A unique identifier in a **barcode (RFID)** form for a given handling unit – commonly a pallet that is used to track that handling unit throughout its lifecycle.

## **What is License plating?**

License plating is **a method for grouping and managing inventory in the form of a container**. You decide what constitutes a container - a pallet, product carton, truck, or ocean freight box can all be a container. Each container is assigned a unique License Plate Number (LPN) and given a barcode label or RFID tag.

***In SupplyChain365 we use License Plate for the following issues:***

1. **Order:** we use it for any sales or purchase order in the business central (Quote, return order, order, etc.)
2. **Parent:** we use a parent License Plate above other License plates in the hierarchy.
3. **Child:** we use child license plates inside parent license plates in the hierarchy.
4. **Mutation:**we use mutation to put stock on a license plate, you must do this with a mutation order. click here to see the tutorial.

## **SupplyChain365 License Plate States**

|  |  |
| --- | --- |
| **Status** | **Description of the status** |
| New | The License Plate is newly created. No items on the License Plate (no stock) |
| Empty | When there are no items and no Child - LPs on this LP, The LP is ready to receive Items/Childs |
| To Receive | The LP will be received and is present on an incoming order. |
| To Put away | The LP has been received and is ready to be put away ed. |
| Stored | The LP has been stored. |
| Picked | The LP has been picked and is ready to be shipped. |
| Shipped | The LP has been shipped to a third party. |
| Delivered | The LP has been delivered to a third party. |
| In-Transit | The LP is in transit between two locations. |
| Drop Shipping | The LP is directly drop-shipped to your customer. |
| Disposed | The LP has been removed and is no longer used. |
| To Move | The LP is to be moved within the location to another bin. |
| To Pick | The LP is to be picked for a shipment |

## **SupplyChain365 License Plates Settings**

In the supplychain365 extension settings:

1. Child license plates are only used if you enable it in the settings.

        Note: Make it possible to define child & Parent in the SC365 Extension.

1. When child license plates are enabled then you will see that enable child license plates for batch Picking.
2. Also another option will be available in the extension and that is Enable Create Child License Plates in the APP.

### **Points be remember about****License Plates****in SupplyChain365****(****Extension)**

1. You can specify a parent license plate if the state is new or empty.
2. To create a nested license plate for a license plate other than new or empty you must use mutation order.
3. License plates cannot be a child of itself.
4. Only license plates without a parent can be placed on an order (Sales order, Purchase order, Quotes, etc).
   * When a License Plate with children is placed on an order, all of its children are also placed on that order.
   * When a license plate is deleted from an order, all license plates in that hierarchy will be deleted from that order.
5. All items in a license plate or its child must be in the same bin (pick, Put-away, and move).
6. Only a license plate without a parent can be reserved and this rule applies to all its children.
7. Only a license plate without a parent can be placed on a movement and this rule apply to all its children. (movement worksheet and internal movement)
8. Items placed on license plates without children, if items added to a license plate with items, then an error occurs.
9. When the allow pick from license plate option is enabled now you can pick items or license plates from license plate.

### ****Points be remember** about****License Plates****in SupplyChain365****(****APP)**

1. When you handle a license plate, also you must handle all its child license plates.
2. The APP is Capable of removing and adding license plates from license plates.
3. When a license plate is inspected in the app, and the license plate has children, the child license plates can also be inspected.

# **License plates list page**

![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103091659114/original/HPbBGXkk5oyiqkiKbQZf9T883AU3GC_s0A.png?1709109739)

# **License plates Settings Page**

**![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103091661424/original/RabhR02GslZBuOtc70U5VC_weI_K5ml0tA.jpg?1709110042)**

# **License plates Mutation Orders page**

**![](https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/103091662649/original/9oIL6Ahkrf3OYiEhek1Wu5Ul2yFZ6_FbLw.jpg?1709110188)**