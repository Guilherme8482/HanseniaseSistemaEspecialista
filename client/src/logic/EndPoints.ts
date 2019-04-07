
async function get(url: string, object: any){
    const response = await fetch(`${url}?json=${JSON.stringify(object)}`)
    return await response.json()
}
interface ProcessResponse{
    error: boolean,
    resultado: {
        sr: number,
        r1: number,
        r2: number
    }
}
export class EndPoints{
    static async process(dados: number[]){
        const response = <ProcessResponse>await get('/process', {dados})
        if(response.error)
            throw new Error('Internal server error.')
        return response.resultado
    }
}