{
    "editor.vim.enabled": true,
    "vim.useSystemClipboard": true, 
    "vim.leader": "<space>",
    "vim.insertModeKeyBindings": [
        {
        "before": ["j", "j"],
        "after": ["<Esc>"]
        }
    ],
    "vim.normalModeKeyBindings": [
        {
            "before": ["<S-h>"],
            "commands": ["workbench.action.previousEditor"]
        },
        {
            "before": ["<S-l>"],
            "commands": ["workbench.action.nextEditor"]
        },
        {
            "before": ["<A-h>"],
            "commands": ["composer.showComposerChatHistory"]
        },
        {
            "before": ["<leader>", "j"],
            "commands": ["workbench.action.togglePanel"]
        },
        {
            "before": ["<leader>", "e"],
            "commands": [
                "workbench.action.toggleSidebarVisibility",
            ]
        },
    ],
    "editor.fontSize": 18,
}
