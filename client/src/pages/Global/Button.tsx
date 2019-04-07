import React, { Component, CSSProperties } from 'react'
import { Link } from 'react-router-dom';const style: {[id: string]: CSSProperties} = {
    button: {
        border: '0',
        padding: '0 35px 0 35px',
        borderRadius: '2px',
        textDecoration: 'none',
        color: '#FFFFFF',
        boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)',
        backgroundColor: '#31A6FF',
        outline: 'none',
        margin: '0 20px 0 20px',
        height: '30px',
        transition: 'all 0.1s cubic-bezier(.25,.8,.25,1)',
        cursor: 'pointer',
    },
}
interface Props {
    path?: string
    onClick?: () => void
}
export class Button extends Component<Props>{
    render(){
        const { path, onClick, children } = this.props
        const button =  <button
                style={style.button}
                onClick={onClick}
            >
                {children}
            </button>
        return path
            ? <Link to={path}>{button}</Link>
            : button
    }
}