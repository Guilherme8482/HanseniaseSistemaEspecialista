
export class QuestionsByDatabase {
    private static readonly list: {[id: string]: number[]} = {
        all: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35],
        bauru: [0,1,3,4,5,6,7,8,13,14,20,21,22],
        fortaleza: [0,1,2,3,4,5,9,10,11,12,13,15],
        goiania: [0,1,2,3,4,6,7,8,16,17,18,19,25,26,27,28,29,30,31,32,33,34,35],
        manaus: [0,1,2,3,4,5,9,10,11,12,13,15]
    }
    static readonly idList = Object.keys(QuestionsByDatabase.list)

    static get(id: string){
        if(!QuestionsByDatabase.idList.includes(id))
            throw new Error('Unavailable database id. id = ' + id)
        return QuestionsByDatabase.list[id]
    }
    static defaultDatabaseId(){
        return QuestionsByDatabase.idList[0]
    }
}