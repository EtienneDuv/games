import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, '\\static'))
  await app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000/`)
  })
}
bootstrap();
