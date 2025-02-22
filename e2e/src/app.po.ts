/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { browser, by, element } from "protractor";

export class AppPage {
	navigateTo() {
		return browser.get(browser.baseUrl) as Promise<any>;
	}

	getTitleText() {
		return element(
			by.css("app-root .content span")
		).getText() as Promise<string>;
	}
}
