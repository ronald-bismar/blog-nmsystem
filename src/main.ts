import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true //Esto es porque los numbers se envian como string, con esto no habra problema se recibirá number
    }
  }))

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
