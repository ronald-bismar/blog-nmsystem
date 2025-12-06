// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   app.useGlobalPipes(new ValidationPipe({
//     transform: true,
//     whitelist: true,
//     forbidNonWhitelisted: true,
//     transformOptions: {
//       enableImplicitConversion: true //Esto es porque los numbers se envian como string, con esto no habra problema se recibirá number
//     }
//   }))

//   await app.listen(AppModule.port);
// }
// bootstrap();

//Habilitar esta seccion para despliegue
// ya que la otra seccion solo es para probarlo con el comando:
// nest start --watch

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let server;

async function bootstrapServer() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin(origin, callback) {
      const allowedOrigins = [
        //Para desarrollo
        'http://127.0.0.1:5501',
        'http://localhost:3000',
        'https://nextmacrosystem.net'
        //TODO agregar dominio de producción
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
  });

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
  if (req.method === 'OPTIONS') {
    const origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(204).end();
    return;
  }
  return server(req, res);
}