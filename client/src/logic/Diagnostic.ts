import { EndPoints } from "./EndPoints";
import { DatabaseFilter } from "./DatabaseFilter";

export enum ResultType {
    NoReaction,
    Type1,
    Type2
}

export interface ProcessResponse {
    results: number[];
}
export class Diagnostic {
    private static answers: number[] = Diagnostic.getStoredAnswers()
    private static answerListeners: ((value: number) => void)[] = []
    private static resultListener: () => void
    public static saveData = Diagnostic.getStoredSaveDataVariable()

    private static getStoredAnswers(): number[]{
        const value = localStorage.getItem('storedAnswer') || '[]'
        return JSON.parse(value)
    }
    static getStoredSaveDataVariable(): boolean{
        const value = localStorage.getItem('saveData') || 'true'
        return Boolean(JSON.parse(value))
    }
    static getSaveDataVariable(){
        return Diagnostic.saveData
    }
    static setStoredSaveDataVariable(value: boolean){
        Diagnostic.saveData = value
        localStorage.setItem('saveData', JSON.stringify(value))
    }
    private static saveStoredAnswers(){
        if(Diagnostic.saveData)
            localStorage.setItem('storedAnswer', JSON.stringify(Diagnostic.answers))
    }
    static setAnswerListener(id: number, listener: (value: number) => void){
        Diagnostic.answerListeners[id] = listener
    }
    static setResultListener(listener: () => void){
        Diagnostic.resultListener = listener
    }
    static getAnswer(id: number){
        const answer = Diagnostic.answers[id]
        if(answer !== null && answer !== undefined)
            return answer
        const allowed = DatabaseFilter.questionIsAllowed(id)
        Diagnostic.setAnswer(id, allowed ? 0 : -1)
        return 0
    }
    static setAnswer(id: number, value: number){
        Diagnostic.answers[id] = value
        const listener = Diagnostic.answerListeners[id]
        if(listener)
            listener(value)
        Diagnostic.saveStoredAnswers()
    }
    static clearAnswers(){
        for(const [index] of Diagnostic.answers.entries())
            if(Diagnostic.getAnswer(index) !== -1)
                Diagnostic.setAnswer(index, 0)
    }
    static startDiagnosis(){
        if(Diagnostic.resultListener)
            Diagnostic.resultListener()
    }
    static async getData(): Promise<ProcessResponse>{
        const dbId = DatabaseFilter.convertDatabaseIdForNeticaCode()
        const data = [...Diagnostic.answers, dbId]
        const res = await EndPoints.process(data)
        return {
            results: [res.sr, res.r1, res.r2]
        }
    }
}