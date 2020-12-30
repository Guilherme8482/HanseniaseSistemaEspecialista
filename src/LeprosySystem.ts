import { exec as ex } from 'child_process'
import { promisify } from 'util';

const exec = promisify(ex)

function generateCommandBySO(){
    if(process.platform !== 'win32')        {
		throw new Error('Unsupported operating system.')
	}
	return `cd ./sistemaHanseniaseJava/win32 & set PATH=lib/NeticaJ/x86;%PATH% & java -jar "SistemaHanseniase.jar" `
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

export class LeprosySystem{
    static readonly command = generateCommandBySO()
    
    static async process(dados: number[]){
        const command = LeprosySystem.command + dados.join(' ')
        const output = (await exec(command)).stdout
        return JSON.parse(output) as Output
    }
}