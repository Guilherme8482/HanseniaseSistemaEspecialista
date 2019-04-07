import React, { Component } from 'react'
import { Text } from './Text';
import { LanguageManager } from '../../logic/LanguageManager';

export class Article extends Component{
    render(){
        const { article: { title, content }} = LanguageManager.getLanguageObject()
        return <Text title={title} content={content}/>
    }
}