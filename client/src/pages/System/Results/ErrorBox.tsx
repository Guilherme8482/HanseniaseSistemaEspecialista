import React, { Component, CSSProperties } from 'react'
import { BadResult } from '../../../language/Pattern';const style: {[id: string]: CSSProperties} = {
    errorSuperContainer: {
        width: '100%',
        padding: '3%'
    },
    errorContainer: {
		opacity: 0,
		maxHeight: 0,
        backgroundColor: 'rgb(255, 58, 58)',
        color: 'white',
        width: '94%',
        borderRadius: '7px',
        flex: '1',
		transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
    },
    errorContent: {
		overflow: 'hidden',
		borderRadius: '0 0 7px 7px',
		fontSize: '15px',
        transition: 'all 1s',
    },
    error: {
        margin: '10px',
        lineHeight: '2.0',
    },
    errorShowing: {
		opacity: 1,
		maxHeight: '500px',
    },
    title: {
        fontWeight: 'bold',
    },
}
interface Props{
    haveAnError: boolean,
    badResult: BadResult
}
export class ErrorBox extends Component<Props>{
    render(){
        const { haveAnError, badResult} = this.props
        const dinamic = {
            errorContainer: {
                ...style.errorContainer,
                ...(haveAnError ? style.errorShowing : {})
            }
        }
        return <div style={style.errorSuperContainer}>
        <div style={dinamic.errorContainer}>
            <div style={style.errorContent}>
                <div style={style.error}>
                    <div style={style.title}>
                        {badResult.title}
                    </div>
                    <div>
                        {badResult.description}
                    </div>
                </div>
            </div>
        </div>
    </div>
    }
}