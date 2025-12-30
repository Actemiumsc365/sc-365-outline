---
title: RELEASE_NOTES
---
<style>
  /* 2. OPTIONAL: Better styling for the Release Home */
  .hero-box {
    background-color: #f3f2f1; /* Light gray background */
    padding: 40px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 35px;
    border: 1px solid #e1dfdd;
  }
  
  /* A nice card style for the "Latest Release" */
  .latest-release-card {
    border-left: 6px solid #0078d4; /* Corporate Blue accent */
    background-color: #faf9f8;
    padding: 20px;
    border-radius: 0 6px 6px 0;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }

  /* Tags for easy reading */
  .tag {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: bold;
    color: white;
  }
  .tag-new { background-color: #107c10; } /* Green */
  .tag-fix { background-color: #d13438; } /* Red */
  .tag-imp { background-color: #0078d4; } /* Blue */

</style>

# SupplyChain365 Release Notes

<div class="hero-box">
  <h2>🚀 What's New?</h2>
  <p>Welcome to the official changelog. Here you can find a history of all updates, improvements, and fixes deployed to the SupplyChain365 platform.</p>
</div>

## Current Release

<div class="latest-release-card">
  <h3>🌟 Version 25.12 (December Update)</h3>
  <p><strong>Release Date:</strong> December 15, 2025</p>
  <p>This major update introduces the new Transport Module and significantly improves the Scheduler performance for large datasets.</p>
  
  <strong>Highlights:</strong>
  <ul>
    <li><span class="tag tag-new">NEW</span> <strong>Transport Module:</strong> Full integration with external carrier APIs.</li>
    <li><span class="tag tag-imp">IMPROVED</span> <strong>Scheduler:</strong> Load times reduced by 40% for lists over 10,000 items.</li>
    <li><span class="tag tag-fix">FIX</span> <strong>Login:</strong> Fixed an issue where the "Remember Me" token expired too quickly.</li>
  </ul>
  <br/>
  <a href="releases/2025/december.md"><strong>Read full release notes &rarr;</strong></a>
</div>

---

## 📅 Release History

Navigate through our previous updates to see how the platform has evolved.

### 2025
* [**November v25.11**](releases/2025/november.md) - *3PL & VAL Module Release*
* [**October v25.10**](releases/2025/october.md) - *Warehouse Optimization Update*
* [**September v25.09**](releases/2025/september.md) - *Q3 Security Patch*

### 2024
* [**December v24.12**](releases/2024/december.md) - *Year End Summary*
* [**June v24.06**](releases/2024/june.md) - *Mid-year Feature Drop*

---

### 💡 Legend
* <span class="tag tag-new">NEW</span> : New feature or major capability added.
* <span class="tag tag-imp">IMPROVED</span> : Existing feature made better, faster, or easier to use.
* <span class="tag tag-fix">FIX</span> : Correction of a bug or error.

*For support regarding any of these releases, please contact us at support@directid.onmicrosoft.com*
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
