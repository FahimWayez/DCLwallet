import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
