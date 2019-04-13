import React, { Component, CSSProperties } from 'react'
import { State } from '../../logic/State/Global';

const style: {[id: string]: CSSProperties} = {
    footer:{
        backgroundColor: '#03A9F4',
        width: '100%',
        minHeight: '50px',
        maxWidth: '1200px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridRowStart: 2,
        gridRowEnd: 3,
        //boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }
}
export class Footer extends Component{
    render(){
        const { footer: { content } } = State.language.getLanguageObject()
        return <footer  style={style.footer}>
            {content}
        </footer >
    }
}