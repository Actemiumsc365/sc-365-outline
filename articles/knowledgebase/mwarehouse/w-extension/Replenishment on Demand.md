# Replenishment on Demand

**Introduction to replenishment on demand**

Replenishment on Demand is used to create movements to move stock from bulk to pick locations for sales orders/warehouse shipments.

**Preparation**

To make Replenishment on Demand work, BC must be setup correctly:

1. The location must have directed put-away and pick enabled.
2. There must be a bin type that can only be used for put-away, and there must be a bin type that can be picked from (Storage or pick zone).
3. There should also be bins for this type, preferably in their own zone (E-01-02 or G-02-02)
4. There should be some stock in these bins.

**Replenishment on Demand process in business central**

Replenishment on Demand can be found in the 'Tell me what you want to do' search function.   (alt + q).

Here you must specify the location and the type of document for which you want to calculate replenishment, then BC will calculate which movements are needed.

You will then see by default which stock you are missing in your pick locations to fulfill the orders if it is present in your bulk. You can expand this even further by applying the different filters.

image.png

In the rightmost column, you can indicate what you want to move.

Please note: If you choose stock that is on a license plate, pay attention to whether you are allowed to break it or not, depending on your location settings.

If you click on the Propose Movement button, BC will open the movement worksheet and fill it with the movements proposed here. Here you can see exactly which movements BC will create, and you can further adjust and fine-tune it yourself.

***Below, a video to understand the tutorial visually:***