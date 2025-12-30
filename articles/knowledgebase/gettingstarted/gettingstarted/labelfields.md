---
title: LABELS_AND_BC_FIELDS
---
<style>
  /* Global Alignment Rule */
  p, li {
    text-align: justify;
  }
</style>

# Labels & BC-Fields in Superdesk

Information about the fields in Business Central and labels in the mobile **Superdesk** app.

### TABLE OF CONTENTS
* [Item label](#item-label)
* [Receipt process](#receipt-process)
* [Pick process](#pick-process)
* [Shipment process](#shipment-process)
* [Inventory process](#inventory-process)
* [Movement process](#movement-process)
* [License Plate process](#license-plate-process)

---

## Item label

### Item
* Etag
* ItemId
* Number
* IdentifierCode
* Description
* Blocked
* Type
* ItemCategoryId
* ItemCategoryCode
* BaseUnitOfMeasureId
* Gtin
* UnitPrice
* PriceIncludesTax
* UnitCost
* TaxGroupId
* TaxGroupCode
* LastModifiedDateTime
* ItemTrackingCode
* SerialNos
* LotNos
* ExpirationCalculation
* BaseUnitOfMeasure
* OverReceiptCode
* OverReceiptTolerancePercentage
* DynamicNo (For serial and lotno labels when printing itemtracking)

---

## Receipt process

### ReceiptHeader
* No
* LocationCode
* BinCode
* DocumentStatus
* PostingDate
* VendorShipmentNo
* AssignedUserId
* AssignmentDate
* AssignmentTime
* SortingMethod
* Blocked

### ReceiptLine
* No
* LineNo
* SourceDocument
* SourceNo
* ItemNo
* Description
* BinCode
* Quantity
* QuantityToReceive
* QuantityToCrossDock
* QuantityReceived
* QuantityOutstanding
* DueDate
* UnitOfMeasureCode
* QuantityPerUnitOfMeasure
* LocationCode
* Picture
* ItemId
* AuxiliaryIndex1
* PictureContentType
* Blocked
* ItemIdentifierCode

---

## Pick process

### PickHeader
* ActivityType
* No
* AssignedUserID
* WhsGroup
* Blocked
* AutoOpenHeader
* AutoOpenLine
* LocationCode
* LineCount
* TotalQty
* TotalQuantityHandled
* TotalQuantityOutstanding
* SourceNo
* ExternalDocumentNo
* ShiptoName
* ShiptoAddress
* ShiptoCity
* ShiptoPostCode
* ShipmentDate
* DueDate

### PickLine (not Outbound Transfer)
* ActivityType
* DueDate
* ExternalDocumentNo
* LocationCode
* No
* ShipmentDate
* ShiptoAddress
* ShiptoCity
* ShiptoName
* ShiptoPostCode
* SourceNo
* QuantityOutstanding
* ItemNo
* Description
* QuantityToHandle
* QuantityHandled
* UomCode
* BinCode
* AuxiliaryIndex1
* AuxiliaryIndex2
* ShiptoAddress2
* ShiptoName2
* PromisedDeliveryDate
* ShiptoCountryRegionCode
* ShiptoCounty
* VariantCode
* SerialNo
* LotNo

### PickLine Outbound Transfer
* ActivityType
* DueDate
* ExternalDocumentNo
* LocationCode
* No
* ShipmentDate
* ShiptoAddress
* ShiptoCity
* ShiptoName
* ShiptoPostCode
* SourceNo
* QuantityOutstanding
* ItemNo
* Description
* QuantityToHandle
* QuantityHandled
* UomCode
* BinCode
* AuxiliaryIndex1
* AuxiliaryIndex2
* ShiptoAddress2
* ShiptoName2
* PromisedDeliveryDate
* ShiptoCountryRegionCode
* ShiptoCounty
* VariantCode
* SerialNo
* LotNo

---

## Shipment process

### ShipmentHeader
* No
* ExternalDocumentNo
* LocationCode
* BinCode
* DocumentStatus
* PostingDate
* AssignedUserId
* AssignmentDate
* AssignmentTime
* SortingMethod
* Blocked

### ShipmentLine
* No
* LineNo
* SourceDocument
* SourceNo
* ItemNo
* Description
* BinCode
* Quantity
* QuantityToShip
* QuantityToCrossDock
* QuantityShipped
* QuantityPicked
* QuantityOutstanding
* DueDate
* UnitOfMeasureCode
* QuantityPerUnitOfMeasure
* LocationCode
* Picture
* ItemId
* AuxiliaryIndex1
* PictureContentType

---

## Inventory process

### ItemCount
* ItemNo
* BinCode
* LocationCode
* VariantCode
* UnitOfMeasureCode
* ReservedQty
* ReservedQtyBase
* Customer

### LicensePlateHeader
* OdataEtag
* No
* Barcode
* LocationCode
* Zone
* BinCode
* State
* DateTime CreationDate
* Blocked
* Description
* ExternalIdentifier
* GS1

### InventoryCountLine
* BinCode
* DateTime DateRecorded
* Description
* ItemNo
* LineNo
* Description2
* LocationCode
* LotNo
* OrderLineNo
* OrderNo
* PersonRecorded
* QtyperUnitofMeasure
* Quantity
* QuantityBase
* Recorded
* RecordedWithoutOrder
* RecordingNo
* SerialNo
* ShelfNo
* TimeRecorded
* UnitofMeasure
* UnitofMeasureCode
* UseItemTracking
* VariantCode
* Picture
* PictureContentType
* ItemId

---

## Movement process

### MovementLine
* ActivityType
* DueDate
* ExternalDocumentNo
* LocationCode
* No
* ShipmentDate
* ShiptoAddress
* ShiptoCity
* ShiptoName
* ShiptoPostCode
* SourceNo
* QuantityOutstanding
* ItemNo
* Description
* QuantityToHandle
* QuantityHandled
* UomCode
* BinCode
* AuxiliaryIndex1
* AuxiliaryIndex2
* ShiptoAddress2
* ShiptoName2
* PromisedDeliveryDate
* ShiptoCountryRegionCode
* ShiptoCounty
* VariantCode
* SerialNo
* LotNo

---

## License Plate process

### License Plate Header
* GTIN
* LotNo
* SerialNo
* ExpirationDate
* ItemDescription
* IsHomogeneous
* SSCC
* Gs1GTIN
* Gs1ExpirationDate
* Gs1Quantity
* TotalQuantity
* CustomerName