import React, { Component, CSSProperties } from 'react'
import { Questions } from './Questions/Questions';
import { Results } from './Results/Results';
import { TopBar } from './TopBar';

const style: {[id: string]: CSSProperties} = {
    container: {
        height: '100%',
        width: '100%'
    },
    content: {
        height: '96%',
        display: 'grid',
        gridTemplateColumns: '7fr 3fr',
    }
}
export class System extends Component{
    render(){
        return <div style={style.container}>
            <TopBar/>
            <div style={style.content}>
                <Questions/>
                <Results/>
            </div>
        </div>
    }
}