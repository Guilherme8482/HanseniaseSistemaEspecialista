
export interface Result {
    name: string
    description: string
}
export interface Question{
    id: number
    title: string
    options: string[]
}
export interface QuestionGroup{
    title: string
    questions: Question[]
}
export interface BadResult {
    title: string
    description: string
}
export interface Language{
    meta: {
        displayName: string
    }
    header: {
        title: string
        menus: {
            home: string
            system: string
            article: string
        }
    }
    tipBox: {
        description: string
        buttonName: string
    }
    home: {
        title: string
        content: string
    }
    article: {
        title: string
        content: string
    }
    system: {
        topBar: {
            database: {
                label: string
                options: {
                    id: string
                    value: string
                }[]
            }
            clearButton: string
            rememberInformation: string
        }
        questionGroups: QuestionGroup[]
        reults: {
            label: string
            noReaction: Result
            type1: Result
            type2: Result
        }
    }
    footer: {
        content: string
    }
    logs: {
        loadingAlt: string
    }
    error: {
        badResult: BadResult
    }
}