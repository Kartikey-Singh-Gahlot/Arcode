

import { Injectable, NestMiddleware, NestModule } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {ConfigService} from '@nestjs/config'
import { ResponseEntity } from './responseEntity.js';

@Injectable()
export class ServiceSecretValidatorlMiddleware implements NestMiddleware {
   
  private response:ResponseEntity<string> = new ResponseEntity();

  constructor(private readonly configService:ConfigService){

  };

  use(req: Request, res: Response, next:NextFunction) {
    const serviceSecret= req.headers['x-internal-service-secret'];
    if(!serviceSecret){
      this.response.setStatus(false);
      this.response.setMessage("Service Secret Missing");
      return res.status(401).json(this.response);
    }
    try{
      if( serviceSecret == this.configService.getOrThrow('X-INTERNAL-SERVICE-SECRET')){
       return  next();
      }
      this.response.setStatus(false);
      this.response.setMessage("Invalid Secret");
      return res.status(401).json(this.response);
    }
    catch(err:any){
      this.response.setStatus(false);
      this.response.setMessage("Internal Server Error");
      this.response.setBody(err);
      return res.status(401).json(this.response);
    }
  }

}



