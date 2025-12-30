---
title: PACK_AND_SHIP
---
<style>
  /* Card Style */
  .nav-card {
    background: #ffffff;
    border: 1px solid #e1dfdd;
    border-left: 4px solid #d83b01; /* Orange accent for Shipping */
    border-radius: 4px; /* Slightly sharper corners for boxes */
    padding: 20px;
    transition: all 0.2s ease-in-out;
    text-decoration: none !important;
    color: #333 !important;
    display: block;
  }

  /* Hover Effect */
  .nav-card:hover {
    background-color: #fdfdfd;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  }

  .card-icon { font-size: 24px; margin-bottom: 10px; display: block; }
  .card-title { font-weight: bold; font-size: 1.1em; margin-bottom: 5px; display: block; }
  .card-desc { font-size: 0.9em; color: #666; display: block; }

</style>

# 📦 Pack & Ship

Optimize your outbound logistics. The Pack & Ship module streamlines the process from picking items off the shelf to printing the final carrier label.

### Logistics Flows

<div class="grid-container">

  <a href="#" class="nav-card">
    <span class="card-icon">🏗️</span>
    <span class="card-title">Packing Station</span>
    <span class="card-desc">Guidance for the Scan & Pack interface.</span>
  </a>

  <a href="#" class="nav-card">
    <span class="card-icon">🚚</span>
    <span class="card-title">Carrier Integration</span>
    <span class="card-desc">Connect with FedEx, DHL, UPS, and others.</span>
  </a>

  <a href="#" class="nav-card">
    <span class="card-icon">🏷️</span>
    <span class="card-title">Label Printing</span>
    <span class="card-desc">Setup ZPL printers and label templates.</span>
  </a>

  <a href="#" class="nav-card">
    <span class="card-icon">🌍</span>
    <span class="card-title">Track & Trace</span>
    <span class="card-desc">Monitor shipment status and tracking numbers.</span>
  </a>

</div>
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
