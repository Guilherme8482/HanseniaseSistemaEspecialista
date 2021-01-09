import { LanguageAvailable } from '../../../staticData/Language/Available'
import { sepreStore } from "./LocalStore";

export class LanguageManager {
	get languageObject() {
		return LanguageAvailable.get(this.storedLanguageId)
	}
	get storedLanguageId() {
		return sepreStore.get().languageId
	}
	set storedLanguageId(id: string) {
		sepreStore.set({languageId: id})
	}
	set languageId(id: string) {
		LanguageAvailable.get(id)
		this.storedLanguageId = id
		document.location.reload(true)
	}
}
