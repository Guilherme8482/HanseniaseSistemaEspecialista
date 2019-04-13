import React, { Component, CSSProperties } from 'react'
import { Select } from '../Global/Select';
import { Toggle } from '../Global/Toggle';
import { Button } from '../Global/Button';
import { State } from '../../logic/State/Global';

const style: {[id: string]: CSSProperties} = {
    container: {
        backgroundColor: '#B7E454',
        height: '60px',
        color: 'rgb(80, 80, 80)',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    side: {
        display: 'flex',
        alignItems: 'center',
    },
    font: {
        fontWeight: 'bold',
        margin: '0 10px 0 10px',
        color: '#505050',
    }
}
export class TopBar extends Component{
    clearAnswers(){
        State.questions.clearAnswers()
        State.flags.startDiagnosis()
    }
    render(){
        const { system: { topBar: { database, clearButton, rememberInformation}}} = State.language.languageObject
        return <div style={style.container}>
            <div style={style.side}>
                <div style={style.font}>{database.label}</div>
                <Select
                    action={value => State.databaseFilter.refreshDatabase(value)}
                    options={database.options}
                />
            </div>
            <div style={style.side}>
                <Button onClick={this.clearAnswers}>
                    {clearButton}
                </Button>
                <div style={style.font}>{rememberInformation}</div>
                <Toggle action={v => State.flags.isToSaveData = v} checked={State.flags.isToSaveData}/>
            </div>
        </div>
    }
}