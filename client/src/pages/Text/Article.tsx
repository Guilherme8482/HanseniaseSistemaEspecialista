import React, { Component } from 'react'
import { Text } from './Text';
import { State } from '../../logic/State/Global';

export class Article extends Component{
    render(){
        const { article: { title, content }} = State.language.getLanguageObject()
        return <Text title={title} content={content}/>
    }
}