import React, { Component, CSSProperties } from 'react'
import { SingleResult } from './SingleResult';
import { LanguageManager } from '../../../logic/LanguageManager';
import { ResultType as RT, Diagnostic, ProcessResponse } from '../../../logic/Diagnostic';
import loading from '../../../images/carregando.gif'
import { ErrorBox } from './ErrorBox';const style: {[id: string]: CSSProperties} = {
    container: {
        backgroundColor: '#ece5ce',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    label: {
        height: '40px',
        width: '100%',
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    loading: {
        height: '50px',
        opacity: 1,
		transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)'
    },
    loadingHidden: {
        height: '0px',
        opacity: 0,
		overflow: 'hidden',
		transition: 'all 0.5s cubic-bezier(.25,.8,.25,1)',
    },
}
export class Results extends Component{
    state = {
        isLoading: false,
        haveAnError: false,
        results: [
            0,
            0,
            0
        ]
    }
    componentWillMount(){
        Diagnostic.setResultListener(this.refreshResults)
        Diagnostic.startDiagnosis()
    }
    refreshResults = async () => {
        let results = [0,0,0], 
            haveAnError = false
        this.setState({
            isLoading: true,
            haveAnError
        })        
        try{
            const response = await Diagnostic.getData()
            results = response.results.map(n => 0| n)
        }
        catch{
            haveAnError = true
        }
        finally{
            this.setState({
                isLoading: false,
                haveAnError,
                results
            })
        }
    }
    getGreaterIntensityType(results: number[]): RT{
        let greater = {index: -1, value: 0}
        for(const [index, current] of results.entries())
            if(current > greater.value)
                greater = {index, value: current}
        return greater.index
    }
    render(){
        const { system: { reults }, logs: { loadingAlt }, error: { badResult }} = LanguageManager.getLanguageObject()
        const { results, isLoading, haveAnError } = this.state
        const dinamic = {
            loading: {
                ...style.loading,
                ...(isLoading ? {} : style.loadingHidden)
            }
        }
        const greater = this.getGreaterIntensityType(results)
        return <div style={style.container}>
            <div style={style.loadingContainer}>
                <img style={dinamic.loading} src={loading} alt={loadingAlt}/>
            </div>
            <ErrorBox badResult={badResult} haveAnError={haveAnError}/>
            <div style={style.label}>{reults.label}</div>
            <SingleResult resultData={reults.noReaction}
                probability={results[RT.NoReaction]} opened={greater === RT.NoReaction}/>
            <SingleResult resultData={reults.type1}
                probability={results[RT.Type1]} opened={greater === RT.Type1}/>
            <SingleResult resultData={reults.type2} probability={results[RT.Type2]}
                opened={greater === RT.Type2}/>
        </div>
    }
}