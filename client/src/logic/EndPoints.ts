async function get(url: string, object: any) {
	const response = await fetch(`${url}?json=${JSON.stringify(object)}`)
	return await response.json()
}
interface InternalServerError{
	error: boolean
	errorMsg: string
}

interface ProcessResponse {
	sr: number
	r1: number
	r2: number
}

type Response = InternalServerError | ProcessResponse

export class EndPoints {
	static async process(dados: number[]) {
		const response: Response = await get('/process', { dados })
		if ('error' in response) throw new Error(response.errorMsg)
		return response
	}
}
