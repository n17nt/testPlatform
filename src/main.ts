import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: ['localhost:3000', 'https://mironshox.uz'] });
  await app.listen(process.env.PORT ?? 4000, ()=>{
    console.log(`Server is running ... on ${process.env.PORT || 4000 }`)
}
bootstrap();
