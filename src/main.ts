import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 5200

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`your app is running at http://localhost:${PORT}`)
}
bootstrap();
