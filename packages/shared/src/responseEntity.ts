export class ResponseEntity<T>{
    
  private status: true | false;
  private message : string;
  private body : T | {};

  constructor(){
   this.status = false;
   this.message="";
   this.body="";
  }

  static of<T>(status:true|false, message:string, body?:T): ResponseEntity<T>{
    const res = new ResponseEntity<T>();
    res.setStatus(status);
    res.setMessage(message);
    if(body !== undefined) res.setBody(body);
    return res;
  }
  
  getStatus(){
    return this.status;
  }
  setStatus(status:true|false){
     this.status = status;
     return this.status;
  }

  getMessage(){
    return this.message;
  }
  setMessage(message:string){
    this.message = message
    return this.message;
  }

  getBody(){
     return this.body;
  }
  setBody(body:T){
    this.body= body;
    return this.body;
  }

}