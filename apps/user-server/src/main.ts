import { existsSync } from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.USER_SERVER_PORT ?? 3000);
}
await bootstrap();
