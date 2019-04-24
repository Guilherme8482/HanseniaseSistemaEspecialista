import { LanguageAvailable } from '../../../staticData/Language/Available'

export class LanguageManager {
	get languageObject() {
		return LanguageAvailable.get(this.storedLanguageId)
	}
	get storedLanguageId() {
		return (
			localStorage.getItem('languageId') ||
			LanguageAvailable.defaultLanguageId()
		)
	}
	set storedLanguageId(id: string) {
		localStorage.setItem('languageId', id)
	}
	set languageId(id: string) {
		LanguageAvailable.get(id)
		this.storedLanguageId = id
		document.location.reload(true)
	}
}
