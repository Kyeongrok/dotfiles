# dotfiles

## Choco 설치
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Windows에서 Symbolic Link만들기

### Wezterm

    mklink %HOMEPATH%\.wezterm.lua %HOMEPATH%\dotfiles\wezterm\wezterm.lua
