import { Language } from './Pattern'
import { dictionary as portugues} from './Portugues'
import { dictionary as english} from './English'

export class LanguageAvailable {
    private static readonly list: {[id: string]: Language} = {
        pt: portugues,
        en: english,
    }
    static readonly idList = Object.keys(LanguageAvailable.list)

    static get(id: string){
        if(!LanguageAvailable.idList.includes(id))
            throw new Error('Unavailable language id. id = ' + id)
        return LanguageAvailable.list[id]
    }
    static defaultLanguageId(){
        return LanguageAvailable.idList[0]
    }
    static getDictionaryList(){
        return LanguageAvailable.idList.map(id => ({
            id,
            value: LanguageAvailable.list[id].meta.displayName
        }))
    }
}