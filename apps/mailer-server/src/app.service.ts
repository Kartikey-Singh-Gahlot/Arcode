import { Injectable } from '@nestjs/common';
import {ResponseEntity} from 'shared/responseEntity';
import {ConfigService} from '@nestjs/config';


@Injectable()
export class AppService {
  private response :ResponseEntity<Object> = new ResponseEntity();

  constructor(private readonly configService:ConfigService){
  }



  // this service checks if the service is reachable
  checkHealth(): ResponseEntity<Object>{
    try{
      this.response.setStatus(true);
      this.response.setMessage("Mailer Server Is Reachable");
    }
    catch(err:any){
      this.response.setStatus(false);
      this.response.setMessage(err.message);
    }
    return this.response;
  }
}
