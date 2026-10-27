import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import {ServiceSecretValidatorlMiddleware} from "shared/serviceFirewallMiddleWares";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ServiceSecretValidatorlMiddleware).forRoutes("/api/health","/");
  }
}
