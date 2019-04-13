
import { QuestionsByDatabase } from '../../../staticData/QuestionsByDatabase'
import { State } from '../Global';

export class DatabaseFilter{
    private answerListeners: ((value: boolean) => void)[] = []
    private databaseId = this.getStoredDatabaseId()

    getStoredDatabaseId(): string{
        const data = localStorage.getItem('databaseId')
        return JSON.parse(data || 'null')
    }
    getDatabaseId(){
        return this.databaseId
    }
    setDatabaseId(id: string){
        if(State.flags.isToSaveData)
            localStorage.setItem('databaseId', JSON.stringify(id))
        this.databaseId = id
    }
    convertDatabaseIdForNeticaCode(){
        const id = QuestionsByDatabase.idList.indexOf(this.databaseId)
        return id === 0 ? QuestionsByDatabase.idList.length - 1 : id - 1
    }
    setAnswerListener(id: number, listener: (value: boolean) => void){
        this.answerListeners[id] = listener
    }
    questionIsAllowed(questionId: number){
        return QuestionsByDatabase.get(this.databaseId).includes(questionId)
    }
    refreshDatabase(databaseId: string){
        const questionsAlowed = QuestionsByDatabase.get(databaseId)
        this.setDatabaseId(databaseId)
        for(const [index, action] of this.answerListeners.entries()){
            const questionAllowed = questionsAlowed.includes(index)
            if(action)
                action(!questionAllowed)
            if(!questionAllowed)
                State.question.setAnswer(index, -1)
        }
        State.flags.startDiagnosis()
    }
}