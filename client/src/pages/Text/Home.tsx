import React, { Component } from 'react'
import { Text } from './Text';
import { State } from '../../logic/State/Global';

export class Home extends Component{
    render(){
        const { home: { title, content }} = State.language.languageObject
        return <Text title={title} content={content}/>
    }
}