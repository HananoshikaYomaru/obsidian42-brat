# 0.7.1 
### New
- Can now force a reinstall of a beta plugin. This might be useful when a local file gets corrupted, and you want to replace it with the current file in the release. (Addresses FR https://github.com/TfTHacker/obsidian42-brat/issues/62)

#### Fixes
- If the URL ends with .git, the Add New Plugin form will strip the .git extension. This makes it easier to use the GitHub copy code button URL with BRAT (fix for https://github.com/TfTHacker/obsidian42-brat/issues/55)

#### Updates
- updated to the newest esbuild and also all project dependencies


# 0.7.0 
## Major updates to **THEMES** support
#### New
- BRAT now supports the Obsidian 1.0+ changes to the way Themes are handled (no longer using obsidian.css, rather using theme.css & manifest.json)
- if a repository has a **theme-beta.css** file, this will be downloaded instead of the theme.css in the repository. This allows a theme developer to have a theme file for beta testing, while still having a theme.css live for public users not testing a theme. [See themes documentation](help/themes.md)

#### Update 
- When deleting a theme from within BRAT's settings, the theme is removed from BRAT monitoring, but the theme is not physically deleted from the vault. The user can delete in Settings > Appearance

#### Removed
- The ability to "switch themes" is removed as this feature was sherlocked and natively added to Obsidian in the command palette with the "Change Theme" command
- BRAT had the ability to install any community theme from the official community theme list. However, since Obsidian improved the themes UI, this feature became redundant and so was removed.



---

# 0.6.37

- Bug fixes 
- Updating core libraries
- Added promotional links for help with supporing the development of this plugin