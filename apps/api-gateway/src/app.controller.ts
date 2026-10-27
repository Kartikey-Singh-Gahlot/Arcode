import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}
  
   
  @Get("health")
  healthCheck(){
    return this.appService.checkHealth();
  }

  
}
