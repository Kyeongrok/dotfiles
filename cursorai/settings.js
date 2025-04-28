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
            "before": ["<leader>", "r", "r"],
            "commands": ["workbench.action.debug.selectandstart"]
        },
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
            "before": [
                "<leader>",
                "r",
                "r"
            ],
            "commands": [
                "workbench.action.debug.start"
            ]
        },
        {
            "before": ["<leader>", "e"],
            "commands": [
                "workbench.action.toggleSidebarVisibility",
            ]
        },
        {
            "before": ["<leader>", "q"],
            "commands": [
                "workbench.action.closeActiveEditor",
            ]
        },
    ],
    "vim.visualModeKeyBindings": [
      {
        "before": ["<C-d>"],
        "commands": [
          "editorScroll",
          {
            "to": "down",
            "by": "halfPage",
            "value": 0.5
          }
        ]
      },
      {
        "before": ["<C-u>"],
        "commands": [
          "editorScroll",
          {
            "to": "up",
            "by": "halfPage",
            "value": 0.5
          }
        ]
      }
    ],
    "editor.fontSize": 18,
}
