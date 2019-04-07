import React, { Component, CSSProperties } from 'react'

const style: {[id: string]: CSSProperties} = {
    container: {
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '5px',
        position: 'relative',
        display: 'inline-block',
        width: '56px',
        height: '30px',
        margin: '0 10px 0 10px',
        backgroundColor: 'rgb(154, 192, 71)',
        cursor: 'pointer',
    },
    containerChecked: {
        backgroundColor: '#31A6FF',
    },
    innerBox: {
        position: 'absolute',
        content: '',
        height: '22px',
        width: '22px',
        left: '4px',
        bottom: '4px',
        backgroundColor: 'white',
        borderRadius: '5px',
        transition: '.4s',
    },
    innerBoxChecked: {
        left: '30px',
    }
}

interface Props{
    checked: boolean,
    action: (value: boolean) => void
}
export class Toggle extends Component<Props>{
    state = {
        isChecked: this.props.checked
    }
    toggleValue = () => {
        const newValue = !this.state.isChecked
        this.setState({isChecked: newValue})
        this.props.action(newValue)
    }
    render(){
        const { isChecked } = this.state
        const dinamic = {
            container: {
                ...style.container,
                ...(isChecked ? style.containerChecked : {})
            },
            innerBox: {
                ...style.innerBox,
                ...(isChecked ? style.innerBoxChecked : {})
            },
        }
        return <div
            onClick={this.toggleValue}
            style={dinamic.container}
        >
            <div style={dinamic.innerBox}></div>
        </div>
    }
}