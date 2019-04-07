import React, { Component, CSSProperties } from 'react'
import { gStyle } from '../../Global/Style'
import { Question } from '../../../language/Pattern';
import { Diagnostic } from '../../../logic/Diagnostic';
import { DatabaseFilter } from '../../../logic/DatabaseFilter';

const style: {[id: string]: CSSProperties} = {
    title: {
        fontWeight: 'normal',
        fontSize: '12px',
        marginBottom: '5px',
    },
    disabled: {
        backgroundColor: 'rgb(255, 255, 255,0.3)'
    },
    extraSpace: {
        margin: '6.3px 0 6.3px 0',
    }
}

interface Props {
    key: number
    question: Question,
    extraSpace: boolean
}
export class SingleQuestion extends Component<Props>{
    state = {
        disabled: false,
        value: Diagnostic.getAnswer(this.props.question.id)
    }
    componentWillMount(){
        const id = this.props.question.id
        Diagnostic.setAnswerListener(id, value => this.setState({value}))
        DatabaseFilter.setAnswerListener(id, disabled => this.setState({disabled}))
    }
    handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { question: { id }} = this.props
        Diagnostic.setAnswer(id, Number(event.target.value))
        Diagnostic.startDiagnosis()
    }
    render(){
        const { disabled, value } = this.state
        const { question: { id,title, options }, extraSpace } = this.props
        const dinamic = {
            select: {
                ...gStyle.select,
                ...(disabled ? style.disabled : {}),
                ...(extraSpace ? style.extraSpace : {})
            }
        }
        return <div style={style.container}>
            <div style={style.title}>{title}:</div>
            <select
                id={id.toString()}
                style={dinamic.select}
                disabled={disabled}
                onChange={this.handleChange}
                value={value}>
                <option value={0}>-</option>
                {
                    options.map((answer, id) => <option key={id} value={id + 1}>{answer}</option>)
                }
            </select>
        </div>
    }
}

