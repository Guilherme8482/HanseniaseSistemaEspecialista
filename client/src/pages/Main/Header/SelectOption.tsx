import React, { Component, CSSProperties } from 'react'
import languageIcon from '../../../images/translate-white.png'
import { LanguageManager } from '../../../logic/LanguageManager';const style: {[id: string]: CSSProperties} = {
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        position: 'relative',
        top: '3px',
    },
    select: {
        background: `url(${languageIcon}) no-repeat right`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '25px',
        backgroundPositionX: '97%',
        backgroundPositionY: '16px',
        border: 'none',
        appearance: 'none',
        height: 'calc(100% - 5px)',
        width: '100%',
        fontSize: '20px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none',
        borderBottom: '5px solid rgba(0, 0, 0, 0)',
        display: 'flex',
        cursor: 'pointer',
    },
    option: {
        height: '65px',
        fontSize: '25px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03A9F4',
        color: 'white',
        border: 0,    },
    bottomBar: {
        backgroundColor: 'white',
        height: '5px',
        width: '100%',
        position: 'relative',
        top: '-3px',
        transition: 'all .5s',
    }
}
export class SelectOption extends Component <{
    options: {id: string, value: string}[],
    action: (value: string) => void,
    value: string
}> {
    state = {
        isMouseHover: false
    }
    setMouseHover = (value: boolean) => {
        this.setState({isMouseHover: value})
    }
    render(){
        const { action, options, value} = this.props
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
        return <div style={dinamic.container}
            onMouseEnter={() => this.setMouseHover(true)}
            onMouseLeave={() => this.setMouseHover(false)}
            onClick={() => this.setMouseHover(false)}
        >
            <select
                style={style.select}
                onChange={e => action(e.target.value)}
                defaultValue={String(value)}
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
            <div style={dinamic.bottomBar}></div>
        </div>
    }
}