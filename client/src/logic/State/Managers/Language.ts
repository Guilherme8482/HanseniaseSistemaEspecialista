import { LanguageAvailable } from "../../../staticData/Language/Available";

export class LanguageManager{

    getLanguageObject(){
        return LanguageAvailable.get(this.getStoredLanguageId())
    }
    getStoredLanguageId(){
        return localStorage.getItem('languageId') || LanguageAvailable.defaultLanguageId()
    }
    setStoredLanguageId(id: string){
        localStorage.setItem('languageId', id)
    }
    setLanguage(id: string){
        LanguageAvailable.get(id)
        this.setStoredLanguageId(id)
        document.location.reload(true)
    }
}