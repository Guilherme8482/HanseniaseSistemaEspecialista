import React, { Component, CSSProperties } from 'react'
import { QuestionGroup } from './QuestionGroup';
import { State } from '../../../logic/State/Global';

const style: {[id: string]: CSSProperties} = {
    container: {
        height: '100%',
        backgroundColor: '#E5FEFF',
        display: 'flex',
    },
    side: {
        flex: '1'
    }
}
export class Questions extends Component{
    render(){
        const { system: { questionGroups }} = State.language.languageObject
        const newQuestions = questionGroups.slice()
        const genetics = newQuestions.pop()
        if(genetics === undefined)
            throw new Error('Error finding genetics questions!')
        return <div style={style.container}>
            <div style={style.side}>
                {
                    newQuestions.map((g, i) => <QuestionGroup key={i} questionGroup={g} extraSpace={false}/>)
                }
            </div>
            <div style={style.side}>
                <QuestionGroup key={0} questionGroup={genetics} extraSpace={true}/>
            </div>
        </div>
    }
}