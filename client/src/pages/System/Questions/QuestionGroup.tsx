import React, { Component, CSSProperties } from 'react'
import { SingleQuestion } from './SingleQuestion';
import { QuestionGroup as QG } from '../../../language/Pattern'

const style: {[id: string]: CSSProperties} = {
    container: {
        fontWeight: 'bold',
        textAlign: 'left',
        margin: '7px',
        borderRadius: '3px',
        backgroundColor: '#CEEFFF',
    },
    title: {
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    titleMouseOver: {
        textDecoration: 'underline',
    },
    questionsContainer: {
		opacity: 0,
		maxHeight: 0,
		overflow: 'hidden',
        transition: 'all .6s',
    },
    questionsContainerShowing: {
		opacity: 1,
		maxHeight: '1000px',
        transition: 'all 1.2s',
    },
    questionsContent: {
        padding: '8px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '8px'
    }
}
export class QuestionGroup extends Component<{
    key: number,
    questionGroup: QG,
    extraSpace: boolean
}>{
    state = {
        questionsShowing: true,
        titleMouseOver: false
    }
    changeQuestionShowing = () => {
        this.setState({questionsShowing: !this.state.questionsShowing})
    }
    changeTitleMouseOver = () => {
        this.setState({titleMouseOver: !this.state.titleMouseOver})
    }
    render(){
        const { questionsShowing, titleMouseOver } = this.state
        const { questionGroup: { title, questions}, extraSpace } = this.props

        const dinamic = {
            questionsContainer: {
                ...style.questionsContainer,
                ...(questionsShowing ? style.questionsContainerShowing : {})
            },
            title: {
                ...style.title,
                ...(titleMouseOver ? style.titleMouseOver : {})
            }
        }
        return <div style={style.container}>
            <div
                onClick={this.changeQuestionShowing}
                onMouseEnter={this.changeTitleMouseOver}
                onMouseLeave={this.changeTitleMouseOver}
            >
                <div
                    style={dinamic.title}
                >
                    {title}
                </div>
            </div>
            <div style={dinamic.questionsContainer}>
                <div style={style.questionsContent}>
                    {
                        questions.map((q, id) => <SingleQuestion key={id} question={q} extraSpace={extraSpace}/>)
                    }
                </div>
            </div>
        </div>
    }
}