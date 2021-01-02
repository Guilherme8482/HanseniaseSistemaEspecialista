import React, { Component, CSSProperties } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { Home } from '../Text/Home';
import { Article } from '../Text/Article';
import { System } from '../System/System';

const style: {[id: string]: CSSProperties} = {
    background: {
        height: '100%',
        minHeight: '100%',
        display: 'grid',
        gridTemplateRows: '1fr auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        maxWidth: '1200px',
        width: '100%',
        flex: '1 0 auto',
        transition: 'all 5s cubic-bezier(.25,.8,.25,1)',
    },
}
export class Main extends Component{
    render(){
        return <div style={style.background}>
            <Router>
                <div style={style.container}>
                    <Header/>
                    <div style={style.content}>
                        <Route exact path="/" component={() => <Redirect to="/home"/>}/>
                        <Route path="/home" component={Home} />
                        <Route path="/system" component={System} />
                        <Route path="/article" component={Article} />
                    </div>
                    <Footer/>
                </div>
            </Router>
        </div>
    }
}