import { execSync } from 'child_process'
import { existsSync } from 'fs'

export class Client {
    static async build(){
        console.log('Checking if client is working:')
        if(!Client.buildFolderExist()){
            console.log('\t -> Client is not ready yet.')
            console.log('\t -> Installing dependencies...')
            execSync('cd client & npm install')
            console.log('\t -> Installed dependencies.')
            console.log('\t -> Building client...')
            execSync('cd client & npm run build')
            console.log('\t -> Successfully built.')
        }
        console.log('\t -> Client is working.')
    }
    private static buildFolderExist(){
        return existsSync(process.cwd() + '/client/build')
    }
}