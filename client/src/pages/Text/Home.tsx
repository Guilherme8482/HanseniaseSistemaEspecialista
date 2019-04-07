import React, { Component } from 'react'
import { Text } from './Text';
import { LanguageManager } from '../../logic/LanguageManager';

export class Home extends Component{
    render(){
        const { home: { title, content }} = LanguageManager.getLanguageObject()
        return <Text title={title} content={content}/>
    }
}