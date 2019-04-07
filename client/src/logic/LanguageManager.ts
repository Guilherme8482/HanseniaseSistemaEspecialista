import { ClientLanguage } from '../language/Pattern'
import { dictionary as portugues} from '../language/Portugues'
import { dictionary as english} from '../language/English'

const languages: {[id: string]: ClientLanguage} = {
    pt: portugues,
    en: english,
}
export class LanguageManager{
    private static list: string[] = LanguageManager.generateLanguageList()

    static generateLanguageList(){
        return Object.keys(languages)
    }
    static getDictionaryList(){
        return LanguageManager.list.map(id => ({
            id,
            value: languages[id].meta.displayName
        }))
    }
    static getLanguageObject(){
        return languages[LanguageManager.getStoredLanguageId()]
    }
    static getStoredLanguageId(){
        return localStorage.getItem('languageId') || LanguageManager.list[0]
    }
    static setLanguage(id: string){
        if(!LanguageManager.list.includes(id))
            throw new Error('Unavailable language: ' + id)
        localStorage.setItem('languageId', id)
        document.location.reload(true)
    }
}