import { Diagnostic } from "./Diagnostic";

const questionsAvailableByDatabase: number[][] = [
    /*Completa: */ [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    /*Bauru: */ [0,1,3,4,5,6,7,8,13,14,20,21,22],
    /*Fortaleza: */ [0,1,2,3,4,5,9,10,11,12,13,15],
    /*Goiânia: */ [0,1,2,3,4,6,7,8,16,17,18,19,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],
    /*Manaus: */ [0,1,2,3,4,5,9,10,11,12,13,15]
]
export class DatabaseFilter{
    private static answerListeners: ((value: boolean) => void)[] = []
    private static databaseId = DatabaseFilter.getStoredDatabaseId()

    static getStoredDatabaseId(): number{
        const data = localStorage.getItem('databaseId')
        return JSON.parse(data || '0')
    }
    static getDatabaseId(){
        return DatabaseFilter.databaseId
    }
    static setDatabaseId(id: number){
        if(Diagnostic.saveData)
            localStorage.setItem('databaseId', JSON.stringify(id))
        DatabaseFilter.databaseId = id
    }
    static convertDatabaseIdForNeticaCode(){
        const id = DatabaseFilter.getDatabaseId()
        if(id === 0)
            return questionsAvailableByDatabase.length - 1;
        else
            return id - 1;
    }
    static setAnswerListener(id: number, listener: (value: boolean) => void){
        DatabaseFilter.answerListeners[id] = listener
    }
    static questionIsAllowed(questionId: number){
        return questionsAvailableByDatabase[DatabaseFilter.databaseId].includes(questionId)
    }
    static refreshDatabase(databaseId: number){
        DatabaseFilter.setDatabaseId(databaseId)
        if(databaseId > questionsAvailableByDatabase.length && databaseId < 0)
            throw new Error('Database not allowed. Id: ' + databaseId)
        const questionsAlowed = questionsAvailableByDatabase[databaseId]
        for(const [index, action] of DatabaseFilter.answerListeners.entries()){
            const questionAllowed = questionsAlowed.includes(index)
            if(action)
                action(!questionAllowed)
            if(!questionAllowed)
                Diagnostic.setAnswer(index, -1)
        }
        Diagnostic.startDiagnosis()
    }
}