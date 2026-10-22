import { Injectable } from '@nestjs/common';
import { ResponseEntity } from "shared/responseEntity";
import {FetchOptions} from "shared/fetchOptionsEntity";
import {ConfigService} from '@nestjs/config';

@Injectable()
export class AppService{

  private response :ResponseEntity<Object> = new ResponseEntity();
  private options: FetchOptions<string>= new FetchOptions();

  constructor(private readonly configService:ConfigService){
  }



  
  // this service shows all api are  is reachable or not
  async checkHealth(): Promise<ResponseEntity<Object>>{

    const services = {
      "Auth Server": this.configService.getOrThrow('AUTH_SERVER_URL'),
      "User Server": this.configService.getOrThrow('USER_SERVER_URL'),
      "Mailer Server": this.configService.getOrThrow('MAILER_SERVER_URL'),
    };
    
    try{
      this.options.setHeaders("X-INTERNAL-SERVICE-SECRET", 
        this.configService.getOrThrow<string>('X-INTERNAL-SERVICE-SECRET')
      );
       
      const res = await Promise.all(
          Object.keys(services).map(async (key)=>{
              const r:ResponseEntity<Object> = new ResponseEntity();
            try{
              const processed = await fetch(`${services[key as keyof typeof services]}/health`, {
                    method: this.options.getmMethod(),
                    headers: this.options.getHeaders(),
              });
              const unp = await processed.json();
              console.log(unp);
              return unp ;
            }
            catch(err:any){
                console.log(r);
                r.setMessage(key + "Bad endpoint")
                return r;
            }
          })
      );
      this.response.setStatus(true);
      this.response.setMessage("API Gateway Is Reachable");
      this.response.setBody(res);
    }
    catch(err:any){
      this.response.setMessage(err);
      console.log(this.response);
      return this.response;
    }
    return this.response;
  }


}
