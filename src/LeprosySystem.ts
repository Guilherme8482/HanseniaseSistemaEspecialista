import { exec as ex } from 'child_process'
import { promisify } from 'util';

const exec = promisify(ex)

function generateCommandBySO(){
    const architecture = process.arch === 'x64' ? 'x64' : 'x86'
    if(process.platform == 'linux')
        return `cd ./sistemaHanseniaseJava/linux && LD_LIBRARY_PATH=lib/NeticaJ/${architecture} && export LD_LIBRARY_PATH && java -jar "SistemaHans.jar" `
    else if(process.platform == 'win32')
        return `cd ./sistemaHanseniaseJava/win32 & set PATH=lib/NeticaJ/${architecture};%PATH% & java -jar "SistemaHans.jar" `
    else
        throw new Error('Unsupported operating system.')
}
export interface Resultado {
    sr: number
    r1: number
    r2: number
}
export class LeprosySystem{
    static readonly command = generateCommandBySO()
    
    static async process(dados: number[]){
        const command = LeprosySystem.command + dados.join(' ')
        const output = (await exec(command)).stdout
        return <Resultado>JSON.parse(output)
    }
}