import React, { Component, CSSProperties } from 'react'
import { Link } from 'react-router-dom';

const style: {[id: string]: CSSProperties} = {
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    link:{
        height: 'calc(100% - 5px)',
        listStyle: 'none',
        textDecoration: 'none',
        color: 'white',
        fontSize: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomBar: {
        backgroundColor: 'white',
        height: '5px',
        width: '100%',
        transition: 'all .5s',
    }
}

export class Option extends Component<{path: string, label: string}> {
    state = {
        isMouseHover: false
    }
    changeMouseHover = () => {
        this.setState({isMouseHover: !this.state.isMouseHover})
    }
    render(){
        const { path, label} = this.props
        const { state: { isMouseHover } } = this
        const dinamic = {
            container: {
                ...style.container,
                ...(isMouseHover ? style.optionMouseOver : {})
            },
            bottomBar: {
                ...style.bottomBar,
                opacity: isMouseHover ? 1 : 0
            }
        }
        return  <div style={dinamic.container}>
            <Link
                to={path}
                style={style.link}
                onMouseEnter={this.changeMouseHover}
                onMouseLeave={this.changeMouseHover}
            >
                {label}
            </Link>
            <div style={dinamic.bottomBar}></div>
        </div>
    }
}