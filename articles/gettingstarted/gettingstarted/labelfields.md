---
title: LABELFIELDS
---
<style>
  /* This creates a general setup for THIS page only */
  p, li {
    text-align: justify;
  }
</style>
<h1 id="labels--bc-fields-in-supplychain365">Labels &amp; BC-Fields in SupplyChain365?</h1>

<p>Information about the fields in Business Central and labels in the mobile SupplyChain365 app.</p>
<p>TABLE OF CONTENTS</p>
<p>Item label
Receipt process
Pick process
Shipment process
Receipt process
Inventory process
Movement process
License Plate process</p>
<p>Item label
Item</p>
<p>â€¢ Etag</p>
<p>â€¢ ItemId</p>
<p>â€¢ Number</p>
<p>â€¢ IdentifierCode</p>
<p>â€¢ Description</p>
<p>â€¢ Blocked</p>
<p>â€¢ Type</p>
<p>â€¢ ItemCategoryId</p>
<p>â€¢ ItemCategoryCode</p>
<p>â€¢ BaseUnitOfMeasureId</p>
<p>â€¢ Gtin</p>
<p>â€¢ UnitPrice</p>
<p>â€¢ PriceIncludesTax</p>
<p>â€¢ UnitCost</p>
<p>â€¢ TaxGroupId</p>
<p>â€¢ TaxGroupCode</p>
<p>â€¢ LastModifiedDateTime</p>
<p>â€¢ ItemTrackingCode</p>
<p>â€¢ SerialNos</p>
<p>â€¢ LotNos</p>
<p>â€¢ ExpirationCalculation</p>
<p>â€¢ BaseUnitOfMeasure</p>
<p>â€¢ OverReceiptCode</p>
<p>â€¢ OverReceiptTolerancePercentage</p>
<p>â€¢ DynamicNo (For serial and lotno labels when printing itemtracking)</p>
<p>Receipt process
ReceiptHeader</p>
<p>â€¢ No</p>
<p>â€¢ LocationCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ DocumentStatus</p>
<p>â€¢ PostingDate</p>
<p>â€¢ VendorShipmentNo</p>
<p>â€¢ AssignedUserId</p>
<p>â€¢ AssignmentDate</p>
<p>â€¢ AssignmentTime</p>
<p>â€¢ SortingMethod</p>
<p>â€¢ Blocked</p>
<p>ReceiptLine</p>
<p>â€¢ No</p>
<p>â€¢ LineNo</p>
<p>â€¢ SourceDocument</p>
<p>â€¢ SourceNo</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ BinCode</p>
<p>â€¢ Quantity</p>
<p>â€¢ QuantityToReceive</p>
<p>â€¢ QuantityToCrossDock</p>
<p>â€¢ QuantityReceived</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ DueDate</p>
<p>â€¢ UnitOfMeasureCode</p>
<p>â€¢ QuantityPerUnitOfMeasure</p>
<p>â€¢ LocationCode</p>
<p>â€¢ Picture</p>
<p>â€¢ ItemId</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ PictureContentType</p>
<p>â€¢ Blocked</p>
<p>â€¢ ItemIdentifierCode</p>
<p>Pick process
PickHeader</p>
<p>â€¢ ActivityType</p>
<p>â€¢ No</p>
<p>â€¢ AssignedUserID</p>
<p>â€¢ WhsGroup</p>
<p>â€¢ Blocked</p>
<p>â€¢ AutoOpenHeader</p>
<p>â€¢ AutoOpenLine</p>
<p>â€¢ LocationCode</p>
<p>â€¢ LineCount</p>
<p>â€¢ TotalQty</p>
<p>â€¢ TotalQuantityHandled</p>
<p>â€¢ TotalQuantityOutstanding</p>
<p>â€¢ SourceNo</p>
<p>â€¢ ExternalDocumentNo</p>
<p>â€¢ ShiptoName</p>
<p>â€¢ ShiptoAddress</p>
<p>â€¢ ShiptoCity</p>
<p>â€¢ ShiptoPostCode</p>
<p>â€¢ ShipmentDate</p>
<p>â€¢ DueDate</p>
<p>PickLine (not Outbound Transfer)</p>
<p>â€¢ ActivityType</p>
<p>â€¢ DueDate</p>
<p>â€¢ ExternalDocumentNo</p>
<p>â€¢ LocationCode</p>
<p>â€¢ No</p>
<p>â€¢ ShipmentDate</p>
<p>â€¢ ShiptoAddress</p>
<p>â€¢ ShiptoCity</p>
<p>â€¢ ShiptoName</p>
<p>â€¢ ShiptoPostCode</p>
<p>â€¢ SourceNo</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ QuantityToHandle</p>
<p>â€¢ QuantityHandled</p>
<p>â€¢ UomCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ AuxiliaryIndex2</p>
<p>â€¢ ShiptoAddress2</p>
<p>â€¢ ShiptoName2</p>
<p>â€¢ PromisedDeliveryDate</p>
<p>â€¢ ShiptoCountryRegionCode</p>
<p>â€¢ ShiptoCounty</p>
<p>â€¢ VariantCode</p>
<p>â€¢ SerialNo</p>
<p>â€¢ LotNo</p>
<p>PickLine Outbound Transfer</p>
<p>â€¢ ActivityType</p>
<p>â€¢ DueDate</p>
<p>â€¢ ExternalDocumentNo</p>
<p>â€¢ LocationCode</p>
<p>â€¢ No</p>
<p>â€¢ ShipmentDate</p>
<p>â€¢ ShiptoAddress</p>
<p>â€¢ ShiptoCity</p>
<p>â€¢ ShiptoName</p>
<p>â€¢ ShiptoPostCode</p>
<p>â€¢ SourceNo</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ QuantityToHandle</p>
<p>â€¢ QuantityHandled</p>
<p>â€¢ UomCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ AuxiliaryIndex2</p>
<p>â€¢ ShiptoAddress2</p>
<p>â€¢ ShiptoName2</p>
<p>â€¢ PromisedDeliveryDate</p>
<p>â€¢ ShiptoCountryRegionCode</p>
<p>â€¢ ShiptoCounty</p>
<p>â€¢ VariantCode</p>
<p>â€¢ SerialNo</p>
<p>â€¢ LotNo</p>
<p>Shipment process
ShipmentHeader</p>
<p>â€¢ No</p>
<p>â€¢ ExternalDocumentNo</p>
<p>â€¢ LocationCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ DocumentStatus</p>
<p>â€¢ PostingDate</p>
<p>â€¢ AssignedUserId</p>
<p>â€¢ AssignmentDate</p>
<p>â€¢ AssignmentTime</p>
<p>â€¢ SortingMethod</p>
<p>â€¢ Blocked</p>
<p>ShipmentLine</p>
<p>â€¢ No</p>
<p>â€¢ LineNo</p>
<p>â€¢ SourceDocument</p>
<p>â€¢ SourceNo</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ BinCode</p>
<p>â€¢ Quantity</p>
<p>â€¢ QuantityToShip</p>
<p>â€¢ QuantityToCrossDock</p>
<p>â€¢ QuantityShipped</p>
<p>â€¢ QuantityPicked</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ DueDate</p>
<p>â€¢ UnitOfMeasureCode</p>
<p>â€¢ QuantityPerUnitOfMeasure</p>
<p>â€¢ LocationCode</p>
<p>â€¢ Picture</p>
<p>â€¢ ItemId</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ PictureContentType</p>
<p>Receipt process
ReceiptHeader</p>
<p>â€¢ No</p>
<p>â€¢ LocationCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ DocumentStatus</p>
<p>â€¢ PostingDate</p>
<p>â€¢ VendorShipmentNo</p>
<p>â€¢ AssignedUserId</p>
<p>â€¢ AssignmentDate</p>
<p>â€¢ AssignmentTime</p>
<p>â€¢ SortingMethod</p>
<p>â€¢ Blocked</p>
<p>ReceiptLine</p>
<p>â€¢ No</p>
<p>â€¢ LineNo</p>
<p>â€¢ SourceDocument</p>
<p>â€¢ SourceNo</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ BinCode</p>
<p>â€¢ Quantity</p>
<p>â€¢ QuantityToReceive</p>
<p>â€¢ QuantityToCrossDock</p>
<p>â€¢ QuantityReceived</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ DueDate</p>
<p>â€¢ UnitOfMeasureCode</p>
<p>â€¢ QuantityPerUnitOfMeasure</p>
<p>â€¢ LocationCode</p>
<p>â€¢ Picture</p>
<p>â€¢ ItemId</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ PictureContentType</p>
<p>â€¢ Blocked</p>
<p>â€¢ ItemIdentifierCode</p>
<p>Inventory process
ItemCount</p>
<p>â€¢ ItemNo</p>
<p>â€¢ BinCode</p>
<p>â€¢ LocationCode</p>
<p>â€¢ VariantCode</p>
<p>â€¢ UnitOfMeasureCode</p>
<p>â€¢ ReservedQty</p>
<p>â€¢ ReservedQtyBase</p>
<p>â€¢ Customer</p>
<p>LicensePlateHeader</p>
<p>â€¢ OdataEtag</p>
<p>â€¢ No</p>
<p>â€¢ Barcode</p>
<p>â€¢ LocationCode</p>
<p>â€¢ Zone</p>
<p>â€¢ BinCode</p>
<p>â€¢ State</p>
<p>â€¢ DateTime CreationDate</p>
<p>â€¢ Blocked</p>
<p>â€¢ Description</p>
<p>â€¢ ExternalIdentifier</p>
<p>â€¢ GS1</p>
<p>InventoryCountLine</p>
<p>â€¢ BinCode</p>
<p>â€¢ DateTime DateRecorded</p>
<p>â€¢ Description</p>
<p>â€¢ ItemNo</p>
<p>â€¢ LineNo</p>
<p>â€¢ Description2</p>
<p>â€¢ LocationCode</p>
<p>â€¢ LotNo</p>
<p>â€¢ OrderLineNo</p>
<p>â€¢ OrderNo</p>
<p>â€¢ PersonRecorded</p>
<p>â€¢ QtyperUnitofMeasure</p>
<p>â€¢ Quantity</p>
<p>â€¢ QuantityBase</p>
<p>â€¢ Recorded</p>
<p>â€¢ RecordedWithoutOrder</p>
<p>â€¢ RecordingNo</p>
<p>â€¢ SerialNo</p>
<p>â€¢ ShelfNo</p>
<p>â€¢ TimeRecorded</p>
<p>â€¢ UnitofMeasure</p>
<p>â€¢ UnitofMeasureCode</p>
<p>â€¢ UseItemTracking</p>
<p>â€¢ VariantCode</p>
<p>â€¢ Picture</p>
<p>â€¢ PictureContentType</p>
<p>â€¢ ItemId</p>
<p>Movement process
MovementLine</p>
<p>â€¢ ActivityType</p>
<p>â€¢ DueDate</p>
<p>â€¢ ExternalDocumentNo</p>
<p>â€¢ LocationCode</p>
<p>â€¢ No</p>
<p>â€¢ ShipmentDate</p>
<p>â€¢ ShiptoAddress</p>
<p>â€¢ ShiptoCity</p>
<p>â€¢ ShiptoName</p>
<p>â€¢ ShiptoPostCode</p>
<p>â€¢ SourceNo</p>
<p>â€¢ QuantityOutstanding</p>
<p>â€¢ ItemNo</p>
<p>â€¢ Description</p>
<p>â€¢ QuantityToHandle</p>
<p>â€¢ QuantityHandled</p>
<p>â€¢ UomCode</p>
<p>â€¢ BinCode</p>
<p>â€¢ AuxiliaryIndex1</p>
<p>â€¢ AuxiliaryIndex2</p>
<p>â€¢ ShiptoAddress2</p>
<p>â€¢ ShiptoName2</p>
<p>â€¢ PromisedDeliveryDate</p>
<p>â€¢ ShiptoCountryRegionCode</p>
<p>â€¢ ShiptoCounty</p>
<p>â€¢ VariantCode</p>
<p>â€¢ SerialNo</p>
<p>â€¢ LotNo</p>
<p>License Plate process
License Plate Header</p>
<p>GTIN
LotNo
SerialNo
ExpirationDate
ItemDescription
IsHomogeneous</p>
<p>SSCC</p>
<p>Gs1GTIN
Gs1ExpirationDate</p>
<p>Gs1Quantity</p>
<p>TotalQuantity</p>
<p>CustomerName</p>
