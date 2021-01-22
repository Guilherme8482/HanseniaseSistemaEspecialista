// import { exec as ex } from 'child_process'
// import { promisify } from 'util';

const { exec: ex } = require('child_process')
const { promisify } = require('util')

const exec = promisify(ex)

async function isJava64Bit(){
	const {stderr} = await exec('java -version')
	return stderr.match(/64-Bit/g) !== null
}

async function generateCommand(){
    if(process.platform !== 'win32')        {
		throw new Error('Unsupported operating system.')
	}
	const commands = [
		'cd ./sistemaHanseniaseJava',
		(await isJava64Bit())
			? 'set PATH=lib/NeticaJ/x64;%PATH%'
			: 'set PATH=lib/NeticaJ/x86;%PATH%',
		'java -jar "SistemaHanseniase.jar" ',
	]
	return commands.join(' & ')
}

interface InternalServerError{
	error: boolean
	errorMsg: string
}
interface ProcessResponse {
	resultado: {
		sr: number
		r1: number
		r2: number
	}
}
export type Output = InternalServerError | ProcessResponse

generateCommand().then(command => LeprosySystem.command = command)
export class LeprosySystem{
    static command: string
    
    static async process(dados: number[]){		
        try{
			const command = LeprosySystem.command + dados.join(' ')
			const output = (await exec(command)).stdout
			return JSON.parse(output) as Output
		}catch(error){
			const errorMsg = error instanceof Error 
				? error.message 
				: error.toString()
			return <InternalServerError>{
				error: true,
				errorMsg,
			}
		}        
    }
}