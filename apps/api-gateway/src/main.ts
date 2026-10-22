import { existsSync } from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.API_GATEWAY_PORT || 3000,()=>{
    console.log("listening on ", process.env.API_GATEWAY_PORT || 3000)
  });
  
}
await bootstrap();
