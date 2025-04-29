[
    {
        "key": "escape",
        "command": "workbench.action.focusFirstEditorGroup",
        "when": "!editorTextFocus"
    },
    {
        "key": "alt+1",
        "command": "workbench.view.explorer",
        "when": "viewContainer.workbench.view.explorer.enabled"
    },
        {
        "key": "alt+j",
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+alt+l",
        "command": "editor.action.formatDocument"
    },
    {
        "key": "ctrl+alt+b",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus"
    },
    {
        "key": "ctrl+w",
        "command": "workbench.action.closeActiveEditor",
        "when": "editorTextFocus"
    },
        {
        "key": "ctrl+l",
        "command": "workbench.action.chat.icube.open",
        "when": "icubeHasChatProvider",
        "isAIItem": true
    },
    {
        "key": "ctrl+u",
        "command": "-workbench.action.chat.icube.open",
        "when": "icubeHasChatProvider"
    },
    {
        "key": "ctrl+alt+b",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && isWeb"
    },
    {
        "key": "ctrl+f12",
        "command": "-editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && isWeb"
    },
    {
        "key": "ctrl+alt+b",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus"
    },
    {
        "key": "f12",
        "command": "-editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus"
    },
    {
        "key": "alt+enter",
        "command": "editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+oem_period",
        "command": "-editor.action.quickFix",
        "when": "editorHasCodeActionsProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "shift shift",
        // "command": "workbench.action.showCommands",
        "command": "workbench.action.quickOpen",
        "when": "editorTextFocus"
    } 
]
