import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
