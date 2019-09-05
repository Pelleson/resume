import { observable, action } from "mobx";
import { PersonStore } from "./PersonStore";
import sv from '../translations/sv';
import en from '../translations/en';
import { LightTheme, DarkTheme, NightTheme } from "../themes/Themes";

export class RootStore {

	@observable public locale: string = 'en';
	@observable public messages: any = en;
	@observable public personStore: PersonStore;
	@observable public selectedTheme: any = LightTheme;

	constructor() {
		this.personStore = new PersonStore(this);
	}

	@action public onChangeTheme(theme: string) {
		//todo investigate why ux not update
		switch (theme) {
			case "LightTheme":
				this.selectedTheme = LightTheme;
				break;
			case "DarkTheme":
				this.selectedTheme = DarkTheme;
				break;
			case "NightTheme":
				this.selectedTheme = NightTheme;
				break;
		}
	};

	@action public changeLang(lang: string) {
		switch (lang) {
			case "sv":
				this.messages = sv;
				this.locale = 'sv'
				break;
			case "en":
				this.messages = en;
				this.locale = 'en'
				break;
			default:
				this.messages = en;
				this.locale = 'en'
				break;
		}
	};
}