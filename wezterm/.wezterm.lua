local wezterm = require 'wezterm'

local config = {
    color_scheme = "catppuccin-frappe",
    font_size = 14.3,
    cell_width = 1,  -- PragmataPro adjustment
    line_height = 0.82, -- PragmataPro adjustment
    initial_rows = 44,

    enable_scroll_bar = true,
    scrollback_lines = 30000,
    default_prog = { "C:\\Program Files\\PowerShell\\7\\pwsh.exe" },
    enable_kitty_graphics = true,
    colors = {
        tab_bar = {
            -- The color of the inactive tab bar edge/divider
            inactive_tab_edge = "#575757",
            background = "#1e1e1e",
            new_tab = {
                bg_color = "#000000",
                fg_color = "#808080",

                -- The same options that were listed under the `active_tab` section above
                -- can also be used for `new_tab`.
            },
        },
    },
    leader = { key = "a", mods = "CTRL", timeout_milliseconds = 1000 },
    keys = {
        { key = "b", mods = "LEADER",     action = wezterm.action({ EmitEvent = "open_in_vim" }) },
        { key = "[", mods = "LEADER",     action = wezterm.action({ EmitEvent = "open_in_vim" }) },
        { key = "-", mods = "CTRL",       action = "DecreaseFontSize" },
        { key = "=", mods = "CTRL",       action = "IncreaseFontSize" },
        { key = "1", mods = "LEADER",     action = wezterm.action({ ActivateTab = 0 }) },
        { key = "2", mods = "LEADER",     action = wezterm.action({ ActivateTab = 1 }) },
        { key = "3", mods = "LEADER",     action = wezterm.action({ ActivateTab = 2 }) },
        { key = "4", mods = "LEADER",     action = wezterm.action({ ActivateTab = 3 }) },
        { key = "5", mods = "LEADER",     action = wezterm.action({ ActivateTab = 4 }) },
        { key = "6", mods = "LEADER",     action = wezterm.action({ ActivateTab = 5 }) },
        { key = "7", mods = "LEADER",     action = wezterm.action({ ActivateTab = 6 }) },
        { key = "8", mods = "LEADER",     action = wezterm.action({ ActivateTab = 7 }) },
        { key = "9", mods = "LEADER",     action = wezterm.action({ ActivateTab = 8 }) },
    }
}

return config
