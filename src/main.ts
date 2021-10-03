import { Plugin } from "obsidian";
import { SettingsTab } from "./SettingsTab";
import { Settings, DEFAULT_SETTINGS, existBetaPluginInList } from "./settings";
import BetaPlugins from "./BetaPlugins";

export default class ThePlugin extends Plugin {
	appName = "Obsidian42 - Beta Reviewer's Autoupdate Tool (BRAT)";
	appID = "obsidian42-brat";
	settings: Settings;
	betaPlugins: BetaPlugins;

	async onload(): Promise<void> {
		console.log("loading " + this.appName);
		await this.loadSettings();
		this.addSettingTab(new SettingsTab(this.app, this));

		this.betaPlugins = new BetaPlugins(this);

		const x = await this.betaPlugins.checkForUpdates(true);

		this.addCommand({
			id: "BRAT-AddBetaPlugin",
			name: "Add a beta plugin for testing",
			callback: async () => { await this.betaPlugins.displayAddNewPluginModal() }
		})

		this.addCommand({
			id: "BRAT-checkForUpdates",
			name: "Check for updates to beta plugins",
			callback: async () => { await this.betaPlugins.checkForUpdates(true) }
		})
	}

	onunload(): void { console.log("unloading " + this.appName) }

	async loadSettings(): Promise<void> { this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData()) }

	async saveSettings(): Promise<void> { await this.saveData(this.settings) }
}