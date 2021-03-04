@echo off
setlocal ENABLEDELAYEDEXPANSION
set/a fileNum = 1
ech Renaming files...
for %%f in (*.jpg) do (
  ren %%~nf%%~xf !fileNum!%%~xf
  set/a fileNum += 1
)
echo All files renamed!