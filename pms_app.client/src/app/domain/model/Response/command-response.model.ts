export class CommandResponse {
    id:string=''
    statusCode:number =200;
    messages:string[]=[]

    constructor(id:string='',statusCode:number,messages:string[]=[]){
        this.id = id
        this.statusCode =statusCode
        this.messages = messages
    }
}