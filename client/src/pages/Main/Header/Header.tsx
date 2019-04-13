import React, { Component, CSSProperties } from 'react'
import { Option } from './Option';
import { SelectOption } from './SelectOption';
import { State } from '../../../logic/State/Global';
import { LanguageAvailable } from '../../../staticData/Language/Available';

const style: {[id: string]: CSSProperties} = {
    container: {
        paddingLeft: '100px',
        paddingRight: '100px',
        width: '100%',
        height: '65px',
        backgroundColor: '#03A9F4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        maxWidth: '1000px',
        width: 'calc(100% - 200px)',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flex: 2,
        fontSize: '35px',
        color: '#FAFAFA',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    options: {
        flex: 6,
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
}
export class Header extends Component {
    render(){
        const { header: { title, menus} } = State.language.getLanguageObject()
        return <div style={style.container}>
            <div style={style.content}>
                <div style={style.title}>
                    {title}
                </div>
                <div id='P' style={style.options}>
                    <Option path='home' label={menus.home}/>
                    <Option path='system' label={menus.system}/>
                    <Option path='article' label={menus.article}/>
                    <SelectOption
                        action={State.language.setLanguage}
                        options={LanguageAvailable.getDictionaryList()}
                        value={State.language.getStoredLanguageId()}
                    />
                </div>
            </div>
        </div>
    }
}