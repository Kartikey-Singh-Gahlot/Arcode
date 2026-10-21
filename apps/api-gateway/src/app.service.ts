import { Injectable } from '@nestjs/common';
import { ResponseEntity } from "../../library/responseEntity";

@Injectable()
export class AppService{
 
  private res :ResponseEntity<{}> = new ResponseEntity(true, "", {});

  // this service shows api gateway is reachable or not
  appStarter(): string {

    try{

    }
    catch(err){

    }
    return 'Api Gateway is Reachable';
  }
}
