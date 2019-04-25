import { Request } from 'express'
import { readFileSync, writeFile } from 'fs'

const historyPath = __dirname + '/AccesHistoryData.json'

class Access {
	constructor(private ip: string, private date: Date) {}
	toString() {
		return `[ACCESS] ${this.ip} - ${this.date.toLocaleString()}`
	}
}
export class AccessHistory {
	private static history: Access[] = JSON.parse(
		readFileSync(historyPath, 'utf8'),
	)
	static addAccess(req: Request) {
		const access = new Access(req.ip, new Date())
		AccessHistory.history.push(access)
		console.log(access.toString())
		AccessHistory.saveHistory()
	}
	static saveHistory() {
		const data = JSON.stringify(AccessHistory.history)
		writeFile(historyPath, data, () => {})
	}
}
