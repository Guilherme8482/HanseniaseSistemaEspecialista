import express from 'express'
import { SiteController } from './SiteController'
import * as bodyParser from 'body-parser';

export class Server{
    app = express()

    constructor() {
        this.setupExpress()
        this.setupControllers()
    } 
    private setupExpress() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(express.static('client/build'))
    } 
    private setupControllers(){        
        new SiteController(this.app)
    } 
    start(port: number): void {        
        this.app.listen(port, () => console.log(`Server listening on port ${port}.`))
    }
}