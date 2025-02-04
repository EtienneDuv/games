import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(join(__dirname, 'static'));
  app.setBaseViewsDir(join(__dirname, 'views'));
  app.setViewEngine('ejs');
  app.use(cookieParser())
  app.use((req, res, next) => {
    if (req.cookies.jwt) {
      const token = req.cookies.jwt
      req.headers["authorization"] = `Bearer ${token}`
    }
    return next()
  })
  await app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000/`);
  })
}
bootstrap();
