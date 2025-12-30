---
title: CREATE SANDBOX
---
<style>
  /* This creates a general setup for THIS page only */
  p, li {
    text-align: justify;
  }
</style>
<h1 id="how-to-create-a-sandbox-environment">How to create a sandbox environment</h1>

<p>What's an environment?</p>
<p>Companies in Business Central online exist in what are referred to as environments. There are two types of environments: Production and Sandbox. In short, production environments contain live business data, and sandbox environments are used as a safe place to test things like new business processes or features. If you have access to a company, you have access to the environment it's in. If you have access to more than one company, and those companies are in different environments, when you sign in to Business Central you must specify the environment that you want to work in. Environments are particular to a given area, so if your organization works in multiple countries or regions, you need separate environments for each one.
If you have access to a company, you have access to the environment it's in.</p>
<p>How to create a sandbox environment</p>
<p>Make sure your account has the 'Dynamics 365 Administrator' role set for your tenant. Follow the next steps:</p>
<ul>
<li>Go to Microsoft 365 Administration Center &gt; Users and check your usersâ€™ role assignments.</li>
<li>Go to your Microsoft Edge browser, and login to the Dynamics 365 Business Central admin center.</li>
<li>In Business Central you can find the admin center under the gear icon button (âš™ï¸).</li>
<li>In the Admin center, go to Environments and review the list of your current Business Central environments.</li>
<li>Create a new Environment by clicking on the + in the menu.</li>
<li>Name your new environment (e.g. SupplyChain365-demo-test), select 'Sandbox' as the type, choose your country and choose the latest version of Business Central. When finished, click 'Create'.</li>
<li>It will take a couple of minutes for your new Environment to be created.</li>
<li>Go to the company in your newly created Sandbox by clicking the URL: <a href="https://businesscentral.dynamics.com/">https://businesscentral.dynamics.com/</a><your-tenant-id>/<sandbox-name></sandbox-name></your-tenant-id></li>
<li>In a new Sandbox, you get 2 companies by default. CRONUS (Microsoft's demo company) and an empty My Company.</li>
</ul>
<p>Databases are protected by automatic backups that are kept for 28 days. The backup includes data from any production and sandbox environments in the database.</p>
<b>Below a video to understand the steps visually:

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
  <source src="https://stsc365videodocs.blob.core.windows.net/stscct365videodocs/SupplyChain365%20Videos%20tutorials/SupplyChain365%20Getting%20Started/6%20How%20to%20create%20a%20Sandbox%20Environment.mp4" type="video/mp4" />
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
