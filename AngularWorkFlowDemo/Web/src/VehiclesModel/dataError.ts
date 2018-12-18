export class DataError{
    message: any;
    data: any;
    
    constructor(message, data){
        this.message = message;
        this.data = data;
    }
}