param(
  [string]$Branch = "main",
  [switch]$BuildSite = $true
)

# Eenvoudig sync- & push-script
Write-Host "Synchroniseren en pushen..." -ForegroundColor Cyan

# Optioneel: DocFX builden lokaal (vereist docfx in PATH)
if ($BuildSite) {
  if (Get-Command docfx -ErrorAction SilentlyContinue) {
    Write-Host "DocFX build uitvoeren..." -ForegroundColor Cyan
    docfx build
  } else {
    Write-Host "DocFX niet gevonden in PATH; build wordt overgeslagen." -ForegroundColor Yellow
  }
}

git add -A
git commit -m "Content update ($(Get-Date -Format 'yyyy-MM-dd HH:mm:ss'))" 2>$null
git branch --show-current | Out-Null
if ($LASTEXITCODE -ne 0) { git checkout -b $Branch }

git pull --rebase origin $Branch 2>$null
git push -u origin $Branch
Write-Host "Klaar." -ForegroundColor Green
