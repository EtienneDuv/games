import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { CallModule } from './modules/call/call.module';
import { AppController } from './app.controller'
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    GameModule, 
    CallModule, 
    DatabaseModule, 
    AuthModule, 
    UserModule,
  ],
  controllers: [AppController],
  providers: [AuthService]
})
export class AppModule {}
