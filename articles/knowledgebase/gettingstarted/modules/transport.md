---
title: TRANSPORT
---
<style>
  /* This creates a general setup for THIS page only */
  p, li {
    text-align: justify;
  }
</style>

<h1 id="supplychain365-supplychain365-features-transport-execution">SupplyChain365 SupplyChain365 Features: Transport execution</h1>


## Auto definitions
Capture car data in the system and schedule it as a resource. Specify type, load volume, load weight, EuroNorm, number of axles etc.
## Transport drivers &amp; Resources
Assign transport employees (drivers and co-drivers) to resources so that time tracking, resource planning and resource costs become transparent for all transport activities.
## Consignments
A transport consignment with a linked actions to pick up or bring goods (loading/unloading)
## Tripplanner
Trips are the entities that are actually planned and assigned to cars and transport employees.
## Sequence planner
Let the system calculate the best order for executing multiple transport orders.
## Geocodering
Automatically obtain geo location codes of addresses when creating transport orders and trips. Record geolocations for addresses in the reuse system.
## Trip information on map
View the calculated ride and sequence on a map and make any adjustments to optimize a ride.
## Auto trip planning
Based on the transport orders and available cars and drivers, create an automated planning and sequence and adjust it manually if necessary.
## Integration WMS
Let TMS and WMS work together in an integrated way by planning warehouse operations based on transport orders and trips.## Dock planning
Use trip dock planning and warehouse jobs to prepare inventory for the right dock.
## OTM (Open Trip Model)
Use the Collaborate &amp; Exchange module to work with OTM-based customers and suppliers to obtain transport orders and provide feedback on status.
## Real-time map and vehicle data
Use the SupplyChain365 vehicle IoT module for real-time vehicle data and show the current position of vehicles on a map.
## Emission calculation
Make automatic emission calculations per transport order and trip.
## Toll road
Automatically generate and calculate toll roads data per transport order and trip.
## Loads/Consignments
A consignment is stock with a destination and has certain dimensions and weight.
## Transport Rates
Rates based on mileage, weight, volume and a combination thereof including graduated calculations.
## Automatic transport costs calculation
Let the system automatically perform transport cost calculations per transport order, trip and client.
## Invoice
Generate transport costs invoices for clients based on all transport activities.
## SupplyChain365 TMS workflows
Automate transport transactions and automatically create documents and transport activities by arranging a workflow and providing parameters.
## Questionary paths
Make question paths in multiple languages that must be handled by the driver in the SupplyChain365 TMS APP. Use fields such as text, selection sequence (multi) selection dropdown (single), photo, GPS data, date/time, scan barcode and capture signature.
## Driver APP
Use the SupplyChain365 TMS drivers APP for time registrations of trips and transport orders and recording transport activities. The driver can show all trips in the future that are planned.
## Reports
It is possible to print reports of the consignments and trips before and after. In this way, the process can also be carried on paper. Of course, the advice is to use the driver app.
## Automatic trip planning
It is possible to automatically schedule all consignments on trips via Supplychain365by means of the PTV trip planning that is available as standard in the solution. Additional transactions are charged for this.

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
