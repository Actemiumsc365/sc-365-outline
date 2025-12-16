# sync_and_push.ps1
$ErrorActionPreference = "Stop"

Write-Host "🔄 Starting Synchronization..." -ForegroundColor Cyan

# 1. Run the Node.js Export Script
Set-Location "./scripts"
node export_outline.js
if ($LASTEXITCODE -ne 0) {
    Write-Error "Node.js export script failed."
    exit
}
Set-Location ".."

# 2. Check for Git Changes
$gitStatus = git status --porcelain
if ([string]::IsNullOrWhiteSpace($gitStatus)) {
    Write-Host "✅ No changes detected. Nothing to push." -ForegroundColor Green
    exit
}

# 3. Commit and Push
Write-Host "📦 Changes detected. Committing..." -ForegroundColor Yellow
git add .
git commit -m "Auto-sync: Updated content from Outline $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main

Write-Host "🚀 Success! Changes pushed to GitHub." -ForegroundColor Green