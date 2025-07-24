@echo off
echo Moving images to correct location...

REM Create directories if they don't exist
if not exist "assets\images\gallery" mkdir "assets\images\gallery"

REM Copy images from Gallery folder to assets/images/gallery
copy "Gallery\20250712_151143.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151344.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151529.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151832.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151926.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151437.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\20250712_151741.jpg" "assets\images\gallery\" 2>nul
copy "Gallery\MBSS logo.jpg" "assets\images\" 2>nul

echo Images moved successfully!
pause
