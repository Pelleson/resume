import { observable, action } from "mobx";
import { PersonStore } from "./PersonStore";
import sv from '../translations/sv';
import en from '../translations/en';
import { BasicTheme, DarkTheme } from "../themes/Themes";

export class RootStore {

	@observable public locale: string = 'en';
	@observable public messages: any = en;
	@observable public personStore: PersonStore;
	@observable public selectedTheme: any = BasicTheme;

	constructor() {
		this.personStore = new PersonStore(this);
	}

	@action public onChangeTheme() {
		//TODO: Make more generic;
		JSON.stringify(this.selectedTheme) === JSON.stringify(BasicTheme) ? this.selectedTheme = DarkTheme : this.selectedTheme = BasicTheme;
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