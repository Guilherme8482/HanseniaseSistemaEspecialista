
export enum ResultType {
    NoReaction,
    Type1,
    Type2
}
export class Flags {
    private resultListener?: () => void
    
    get isToSaveData(){
        const value = localStorage.getItem('saveData') || 'true'
        return Boolean(JSON.parse(value))
    }
    set isToSaveData(value: boolean){
        localStorage.setItem('saveData', JSON.stringify(value))
    }
    setResultListener(listener: () => void){
        this.resultListener = listener
    }
    startDiagnosis(){
        if(this.resultListener)
            this.resultListener()
    }
}