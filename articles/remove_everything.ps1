# --- CONFIGURATION ---
# Make sure this points to your specific folder
$folderPath = "C:\docfx-github-sc365\outline\docfx-project\articles\gettingstarted"

# --- SCRIPT LOGIC ---
Write-Host "Target Folder: $folderPath" -ForegroundColor Cyan
Write-Host "Looking for .md files..." -ForegroundColor Cyan

# CHANGE: Now looking for *.md files instead of *.html
$files = Get-ChildItem -Path $folderPath -Filter *.md -Recurse

if ($files.Count -eq 0) {
    Write-Host "ERROR: No .md files found in this folder!" -ForegroundColor Red
}

foreach ($file in $files) {
    # Read text
    $txt = [System.IO.File]::ReadAllText($file.FullName)
    
    # 1. Find start of <article (Case Insensitive)
    $articleTagStart = $txt.IndexOf("<article", [System.StringComparison]::OrdinalIgnoreCase)
    
    # 2. Find end of </article> (Case Insensitive)
    $articleTagEnd = $txt.LastIndexOf("</article>", [System.StringComparison]::OrdinalIgnoreCase)

    if ($articleTagStart -ge 0 -and $articleTagEnd -gt $articleTagStart) {
        # Find the closing ">" of the opening tag
        $openingTagEnd = $txt.IndexOf(">", $articleTagStart)
        
        $contentStart = $openingTagEnd + 1
        $contentLength = $articleTagEnd - $contentStart

        if ($contentLength -gt 0) {
            $finalContent = $txt.Substring($contentStart, $contentLength).Trim()
            
            # Save the file back as .md
            [System.IO.File]::WriteAllText($file.FullName, $finalContent)
            Write-Host "Cleaned: $($file.Name)" -ForegroundColor Green
        }
    }
    else {
        # If the file doesn't have the <article> tags, we leave it alone
        Write-Host "Skipped: $($file.Name) (HTML tags not found)" -ForegroundColor Yellow
    }
}

Write-Host "Done! Press Enter to exit..." -ForegroundColor Cyan
Read-Host