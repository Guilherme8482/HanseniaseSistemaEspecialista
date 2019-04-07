import { Server } from "./Server"
import { Client } from "./Client";

const PORT = 80

!async function main(){
    Client.build()
    const server = new Server
    server.start(PORT)
}()