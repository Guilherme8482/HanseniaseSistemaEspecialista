import { Server } from "./Server"
import { Client } from "./Client";
import getPort from 'get-port'

const DEFAULT_PORT = Number(process.env.port) || 80

!async function main(){
    const freePort = await getPort({port: DEFAULT_PORT})
    Client.build()
    const server = new Server
    server.start(freePort)
}()