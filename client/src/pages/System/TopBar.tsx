import React, { Component, CSSProperties } from 'react'
import { LanguageManager } from '../../logic/LanguageManager';
import { Select } from '../Global/Select';
import { Toggle } from '../Global/Toggle';
import { Diagnostic } from '../../logic/Diagnostic';
import { Button } from '../Global/Button';
import { DatabaseFilter } from '../../logic/DatabaseFilter';

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
        Diagnostic.clearAnswers()
        Diagnostic.startDiagnosis()
    }
    render(){
        const { system: { topBar: { database, clearButton, rememberInformation}}} = LanguageManager.getLanguageObject()
        return <div style={style.container}>
            <div style={style.side}>
                <div style={style.font}>{database.label}</div>
                <Select
                    action={value => DatabaseFilter.refreshDatabase(Number(value))}
                    options={database.options.map((o, i) => ({id: i.toString(), value: o}))}
                />
            </div>
            <div style={style.side}>
                <Button onClick={this.clearAnswers}>
                    {clearButton}
                </Button>
                <div style={style.font}>{rememberInformation}</div>
                <Toggle action={Diagnostic.setStoredSaveDataVariable} checked={Diagnostic.getSaveDataVariable()}/>
            </div>
        </div>
    }
}