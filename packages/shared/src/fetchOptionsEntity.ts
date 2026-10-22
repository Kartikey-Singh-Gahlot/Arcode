export class FetchOptions<T>{
   private method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" ;
   private headers :Record<string, string>;
   private body:T | "";

   constructor(){
    this.method = "GET";
    this.headers = {
         "Content-Type": "application/json",
         "X-INTERNAL-SERVICE-SECRET":"Empty"
    }
    this.body="";
   }

   getmMethod(){
    return this.method;
   }

   setmMethod(method:"GET" | "POST" | "PUT" | "PATCH" | "DELETE" ){
     this.method=method;
     return this.method;
   }


   getHeaders(){
    return this.headers;
   }
   setHeaders(key: "X-INTERNAL-SERVICE-SECRET" | "Content-Type", value: string){
     this.headers[key]=value;
     return this.headers;
   }

   getBody(){
    return this.body;
   }
   setBody(body:T){
     this.body=body;
     return this.body;
   }

}