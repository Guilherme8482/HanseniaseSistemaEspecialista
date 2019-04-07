import React, { Component, CSSProperties } from 'react'
import { Result } from '../../../language/Pattern';const style: {[id: string]: CSSProperties} = {
    superContainer: {
        width: '100%',
        padding: '3%',
    },
    container: {
        backgroundColor: '#F1D4AF',
        width: '94%',
        borderRadius: '7px',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
    },
    resultBar: {
        float: 'left',
        height: '60px',
        backgroundColor: '#B7E454',
        borderRadius: '7px',
        verticalAlign: 'middle',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 1s',
    },
    resultBarTitle: {
        marginLeft: '20px',
    },
    description: {
		opacity: 0,
		maxHeight: 0,
		overflow: 'hidden',
		borderRadius: '0 0 7px 7px',
		fontSize: '15px',
        transition: 'all 1s',
    },
    contentDescription: {
        margin: '10px',
        lineHeight: '2.0',
    },
    descriptionMouseOver: {
		opacity: 1,
		maxHeight: '500px',
    },
    probability: {
        backgroundColor: '#E1C49F',
        borderRadius: '5px',
        margin: '5px',
        fontWeight: 'bold',
    }
}
interface Props {
    resultData: Result,
    probability: number,
    opened: boolean
}
export class SingleResult extends Component<Props>{
    state = {
        mouseIsOver: false
    }
    changeMouseIsOver = () => {
        this.setState({mouseIsOver: !this.state.mouseIsOver})
    }
    render(){
        const { resultData, probability, opened } = this.props
        const { mouseIsOver } = this.state
        const dinamic = {
            resultBar: {
                ...style.resultBar,
                width: probability + '%'
            },
            description: {
                ...style.description,
                ...(mouseIsOver || opened ? style.descriptionMouseOver : {})
            }
        }
        return <div style={style.superContainer}>
            <div
                style={style.container}
                onMouseEnter={this.changeMouseIsOver}
                onMouseLeave={this.changeMouseIsOver}
            >
                <div style={dinamic.resultBar}>
                    <div style={style.resultBarTitle}>
                        {resultData.name}
                    </div>
                    <div style={style.probability}>{probability}%</div>
                </div>
                <div style={dinamic.description}>
                    <div style={style.contentDescription}>
                        {resultData.description}
                    </div>
                </div>
            </div>
        </div>
    }
}