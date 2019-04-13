import React, { Component, CSSProperties } from 'react'
import { State } from '../../logic/State/Global';

const style: {[id: string]: CSSProperties} = {
    container: {
        height: '100%',
        flex: 1,
        cursor: 'pointer',
    },
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
        width: '100%',
        transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
        cursor: 'pointer',
    },
    option: {
    },
    optionMouseOver: {
    },
}

export class Select extends Component <{
    options: {id: string, value: string}[],
    action: (value: string) => void
}> {
    state = {
        isMouseHover: false
    }
    changeMouseHover = () => {
        this.setState({isMouseHover: !this.state.isMouseHover})
    }
    render(){
        const { action, options} = this.props
        const { state: { isMouseHover } } = this
        const value = State.databaseFilter.databaseId
        const dinamic = {
            container: {
                ...style.container,
                ...(isMouseHover ? style.optionMouseOver : {})
            }
        }
        return <div style={dinamic.container}
            onMouseEnter={this.changeMouseHover}
            onMouseLeave={this.changeMouseHover}
        >
            <select
                style={style.select}
                onChange={e => action(e.target.value)}
                value={value}
            >
                {
                    options.map((o, i) =>
                        <option
                            key={i}
                            style={style.option}
                            value={o.id}
                        >
                            {o.value}
                        </option>
                    )
                }
            </select>
        </div>
    }
}