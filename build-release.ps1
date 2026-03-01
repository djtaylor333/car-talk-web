# CarTalk Build & Release Script
# Usage: .\build-release.ps1 [-Major] [-Minor] [-Patch (default)]

param(
    [switch]$Major,
    [switch]$Minor,
    [switch]$Patch = $true
)

$versionFile = "version.json"
$buildGradle = "android-app\app\build.gradle.kts"

# Read current version
$version = Get-Content $versionFile | ConvertFrom-Json
$maj = [int]$version.major
$min = [int]$version.minor
$pat = [int]$version.patch
$code = [int]$version.versionCode

# Bump version
if ($Major) {
    $maj++; $min = 0; $pat = 0
} elseif ($Minor) {
    $min++; $pat = 0
} else {
    $pat++
}
$code++

$newVersion = "$maj.$min.$pat"

# Update version.json
$version.major = $maj
$version.minor = $min
$version.patch = $pat
$version.versionCode = $code
$version.version = $newVersion
$version | ConvertTo-Json -Depth 5 | Set-Content $versionFile

# Update android build.gradle.kts
$gradleContent = Get-Content $buildGradle -Raw
$gradleContent = $gradleContent -replace 'versionCode\s*=\s*\d+', "versionCode = $code"
$gradleContent = $gradleContent -replace 'versionName\s*=\s*"[^"]*"', "versionName = `"$newVersion`""
Set-Content $buildGradle $gradleContent

Write-Host "Bumped to v$newVersion (code $code)"

# Commit and tag
git add -A
git commit -m "Release v$newVersion"
git tag -a "v$newVersion" -m "Release v$newVersion"
git push origin main
git push origin "v$newVersion"

Write-Host "Pushed v$newVersion — GitHub Actions will build APK/AAB and deploy web app."
