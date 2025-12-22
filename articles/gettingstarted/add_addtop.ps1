# Get all .md files in this folder and subfolders
$files = Get-ChildItem -Filter *.md -Recurse

foreach ($file in $files) {
    # 1. Get the filename without extension (e.g., "my-page")
    $fileName = $file.BaseName
    
    # 2. Read the current content of the file
    $originalContent = Get-Content $file.FullName -Raw

    # Safety Check: Skip if the file already has the style tag to avoid duplicates
    if ($originalContent -match "text-align: justify") {
        Write-Host "Skipping $($file.Name) - It seems to be already updated." -ForegroundColor Yellow
        continue
    }

    # 3. Create the new Header block with the dynamic Title
    $newHeader = @"
---
title: APP= $fileName
---
<style>
  /* This creates a general setup for THIS page only */
  p, li {
    text-align: justify;
  }
</style>

"@

    # 4. Combine new header + original content
    $finalContent = $newHeader + $originalContent

    # 5. Save the file
    Set-Content -Path $file.FullName -Value $finalContent -Encoding UTF8
    
    Write-Host "Updated: $($file.Name)" -ForegroundColor Green
}

Write-Host "All done!"