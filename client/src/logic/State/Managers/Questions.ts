import { DatabaseFilter } from "./DatabaseFilter";
import { State } from "../Global";

export class QuestionsState {
    private answers: number[] = this.getStoredAnswers()
    private answerListeners: ((value: number) => void)[] = []

    private getStoredAnswers(): number[]{
        const value = localStorage.getItem('storedAnswer') || '[]'
        return JSON.parse(value)
    }
    private saveStoredAnswers(){
        if(State.flags.isToSaveData)
            localStorage.setItem('storedAnswer', JSON.stringify(this.answers))
    }
    getAnswer(id: number){
        const answer = this.answers[id]
        if(answer !== null && answer !== undefined)
            return answer
        const allowed = State.databaseFilter.questionIsAllowed(id)
        this.setAnswer(id, allowed ? 0 : -1)
        return 0
    }
    setAnswer(id: number, value: number){
        this.answers[id] = value
        const listener = this.answerListeners[id]
        if(listener)
            listener(value)
        this.saveStoredAnswers()
    }
    clearAnswers(){
        for(const [index] of this.answers.entries())
            if(this.getAnswer(index) !== -1)
                this.setAnswer(index, 0)
    }
    setAnswerListener(id: number, listener: (value: number) => void){
        this.answerListeners[id] = listener
    }
    getAnswers(){
        return this.answers
    }
}