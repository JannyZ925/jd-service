import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { EntryModule } from './entry.module';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor';

const PORT = 5200;

async function bootstrap() {
  const app = await NestFactory.create(EntryModule);
  app.setGlobalPrefix('/api/jd-service');
  app.useGlobalInterceptors(new ResponseInterceptor());

  const config = new DocumentBuilder()
    .setTitle('JD Service API Docs')
    .setDescription('The JD API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
  console.log(`your app is running at http://localhost:${PORT}`);
}
bootstrap();
