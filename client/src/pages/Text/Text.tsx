import React, { Component, CSSProperties } from 'react'
import { Button } from '../Global/Button';
import { State } from '../../logic/State/Global';

const style: {[id: string]: CSSProperties} = {
    container: {
        display: 'flex',
        padding: '30px',
        backgroundColor: '#FAFAFA',
    },
    content: {
        flex: '7'
    },
    side: {
        flex: '3',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '50px',
    },
    tipBox: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#EAEAEA',
        margin: '30px',
        padding: '30px',
        borderRadius: '5px',
        height: 'auto',
        alignItems: 'center',
    },
    title: {
        margin: '30px',
        fontSize: '3.5rem',
        lineHeight: '4rem',
        letterSpacing: '-0.15625rem',
        fontWeight: 'bold',
    },
    introduction: {
        margin: '0 60px 0 60px',
        color: "#444",
        fontFamily: "Helvetica, sans-serif",
        lineHeight: "36px",
        textIndent: "36px",
        textAlign: 'justify',
    },
    tipBoxDescription: {
        boxSizing: "inherit",
        fontFamily: "Helvetica, sans-serif",
        lineHeight: "28px",
        position: "relative",
        textIndent: "36px",
        textAlign: 'justify',
    },
}
interface Props{
    title: string
    content: string
}
export class Text extends Component<Props>{
    render(){
        const { tipBox: { description, buttonName }} = State.language.languageObject
        const { title, content} = this.props
        return <div style={style.container}>
            <div style={style.content}>
                <div style={style.title}>{title}</div>
                <div style={style.introduction}>{content}</div>
            </div>
            <div style={style.side}>
                <div style={style.tipBox}>
                    <div style={style.tipBoxDescription}>
                        {description}
                    </div>
                    <Button path='system'>{buttonName}</Button>
                </div>
            </div>
        </div>
    }
}