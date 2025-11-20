import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let server;

async function bootstrapServer() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    transformOptions: { enableImplicitConversion: true }
  }));

  await app.init();
  return app.getHttpAdapter().getInstance();
}

// Esto es lo importante para Vercel
export default async function handler(req, res) {
  if (!server) {
    server = await bootstrapServer();
  }
  return server(req, res);
}
