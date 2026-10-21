export class ResponseEntity<T>{
    
  private status: true | false;
  private message : string;
  private body : T;

  constructor(status: true| false, message: string, body:T){
    this.status = status;
    this.message = message;
    this.body = body;
  }
  
  getStatus():true|false{
    return this.status;
  }
  setStatus(status:true|false):true|false{
     this.status = status;
     return this.status;
  }

  getMessage():string{
    return this.message;
  }
  setMessage(message:string):string{
    this.message = message
    return this.message;
  }

  getBody():T{
     return this.body;
  }
  setBody(body:T):T{
    this.body= body;
    return this.body;
  }

}