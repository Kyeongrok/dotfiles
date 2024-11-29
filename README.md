# dotfiles

## Choco 설치
```shell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

## Windows에서 Symbolic Link만들기

### Wezterm

    ```shell
    mklink %HOMEPATH%\.wezterm.lua %HOMEPATH%\dotfiles\wezterm\.wezterm.lua
    ```

ex)  

    ```shell
    mklink .wezterm.lua "c:\Users\Kyeongrok Bot\git\dotfiles\wezterm\.wezterm.lua"
    ```


### Oh My Posh

Power Shell을 꾸며주는 기능  
![image](https://github.com/user-attachments/assets/44fb65a3-e240-48f4-91aa-1a7473fd39ab)
