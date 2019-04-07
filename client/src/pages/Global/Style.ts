import { CSSProperties } from 'react'

export const gStyle: {[id: string]: CSSProperties} = {
    select: {
        backgroundColor: 'white',
        display: 'inline-block',
        padding: '5px',
        letterSpacing: '.5px',
        border: '0',
        borderRadius: '2px',
        textDecoration: 'none',
        color: 'black',
        outline: 'none',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.12)',
        //marginBottom: '10px',
        width: '100%',
        transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
        cursor: 'pointer',
    }
}