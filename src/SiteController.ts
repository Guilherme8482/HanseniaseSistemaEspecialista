import { Express, Request, Response } from 'express'
import { LeprosySystem, Resultado } from './LeprosySystem'
import { AccessHistory } from './AccessHistory'

export interface ProcessResponse {
	error?: boolean
	resultado?: Resultado
}
export class SiteController {
	constructor(server: Express) {
		server.get('/process', this.process)
		server.get('*', this.site)
	}
	async process(req: Request, res: Response) {
		AccessHistory.addAccess(req)
		let responseData: ProcessResponse = {}
		try {
			if(typeof req.query.json !== 'string') return
			const { dados } = JSON.parse(req.query.json)
			if (!dados || !(dados instanceof Array))
				throw new Error('Data input not found or not compatible.')
			responseData.resultado = await LeprosySystem.process(dados)
		} catch {
			responseData.error = true
		} finally {
			res.send(responseData)
		}
	}
	site(req: Request, res: Response) {
		AccessHistory.addAccess(req)
		res.sendFile(process.cwd() + '/client/build/index.html')
	}
}
