<!DOCTYPE html>
<!--[if IE]><![endif]-->
<html>

  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>How to create a sandbox environment | SupplyChain365 </title>
      <meta name="viewport" content="width=device-width">
      <meta name="title" content="How to create a sandbox environment | SupplyChain365 ">
    
    
      <link rel="shortcut icon" href="../../../images/favicon.ico">
      <link rel="stylesheet" href="../../../styles/docfx.vendor.min.css">
      <link rel="stylesheet" href="../../../styles/docfx.css">
      <link rel="stylesheet" href="../../../styles/main.css">
      <meta property="docfx:navrel" content="../../../toc.html">
      <meta property="docfx:tocrel" content="../../../toc.html">
    
    <meta property="docfx:rel" content="../../../">
    
  </head>
  <body data-spy="scroll" data-target="#affix" data-offset="120">
    <div id="wrapper">
      <header>

        <nav id="autocollapse" class="navbar navbar-inverse ng-scope" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>

              <a class="navbar-brand" href="../../../index.html">
                <img id="logo" class="svg" src="../../../images/logo.png" alt="">
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbar">
              <form class="navbar-form navbar-right" role="search" id="search">
                <div class="form-group">
                  <input type="text" class="form-control" id="search-query" placeholder="Search" autocomplete="off">
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div class="subnav navbar navbar-default">
          <div class="container hide-when-search" id="breadcrumb">
            <ul class="breadcrumb">
              <li></li>
            </ul>
          </div>
        </div>
      </header>
      <div class="container body-content">

        <div id="search-results">
          <div class="search-list">Search Results for <span></span></div>
          <div class="sr-items">
            <p><i class="glyphicon glyphicon-refresh index-loading"></i></p>
          </div>
          <ul id="pagination" data-first=First data-prev=Previous data-next=Next data-last=Last></ul>
        </div>
      </div>
      <div role="main" class="container body-content hide-when-search">
        <div class="article row grid">
          <div class="col-md-10">
            <article class="content wrap" id="_content" data-uid="">
<h1 id="how-to-create-a-sandbox-environment">How to create a sandbox environment</h1>

<p>What's an environment?</p>
<p>Companies in Business Central online exist in what are referred to as environments. There are two types of environments: Production and Sandbox. In short, production environments contain live business data, and sandbox environments are used as a safe place to test things like new business processes or features. If you have access to a company, you have access to the environment it's in. If you have access to more than one company, and those companies are in different environments, when you sign in to Business Central you must specify the environment that you want to work in. Environments are particular to a given area, so if your organization works in multiple countries or regions, you need separate environments for each one.
If you have access to a company, you have access to the environment it's in.</p>
<p>How to create a sandbox environment</p>
<p>Make sure your account has the 'Dynamics 365 Administrator' role set for your tenant. Follow the next steps:</p>
<ul>
<li>Go to Microsoft 365 Administration Center &gt; Users and check your users’ role assignments.</li>
<li>Go to your Microsoft Edge browser, and login to the Dynamics 365 Business Central admin center.</li>
<li>In Business Central you can find the admin center under the gear icon button (⚙️).</li>
<li>In the Admin center, go to Environments and review the list of your current Business Central environments.</li>
<li>Create a new Environment by clicking on the + in the menu.</li>
<li>Name your new environment (e.g. SupplyChain365-demo-test), select 'Sandbox' as the type, choose your country and choose the latest version of Business Central. When finished, click 'Create'.</li>
<li>It will take a couple of minutes for your new Environment to be created.</li>
<li>Go to the company in your newly created Sandbox by clicking the URL: <a href="https://businesscentral.dynamics.com/">https://businesscentral.dynamics.com/</a><your-tenant-id>/<sandbox-name></sandbox-name></your-tenant-id></li>
<li>In a new Sandbox, you get 2 companies by default. CRONUS (Microsoft's demo company) and an empty My Company.</li>
</ul>
<p>Databases are protected by automatic backups that are kept for 28 days. The backup includes data from any production and sandbox environments in the database.</p>
<p>Below a video to understand the steps visually:
<iframe src="https://player.vimeo.com/video/884390860?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="6 How to create a Sandbox Environment" sandbox="allow-scripts allow-forms allow-same-origin allow-presentation" data-identifyelement="492"></iframe></p>

</article>
          </div>

          <div class="hidden-sm col-md-2" role="complementary">
            <div class="sideaffix">
              <div class="contribution">
                <ul class="nav">
                  <li>
                    <a href="https://github.com/Actemiumsc365/sc-365-outline/blob/main/articles/gettingstarted/gettingstarted/createsandbox.md/#L1" class="contribution-link">Edit this page</a>
                  </li>
                </ul>
              </div>
              <nav class="bs-docs-sidebar hidden-print hidden-xs hidden-sm affix" id="affix">
                <h5>In this article</h5>
                <div></div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="grad-bottom"></div>
        <div class="footer">
          <div class="container">
            <span class="pull-right">
              <a href="#top">Back to top</a>
            </span>
      
      <span>Generated by <strong>DocFX</strong></span>
          </div>
        </div>
      </footer>
    </div>

    <script type="text/javascript" src="../../../styles/docfx.vendor.min.js"></script>
    <script type="text/javascript" src="../../../styles/docfx.js"></script>
    <script type="text/javascript" src="../../../styles/main.js"></script>
  </body>
</html>
