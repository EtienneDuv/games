import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { CallModule } from './modules/call/call.module';
import { AppController } from './app.controller'
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [GameModule, CallModule, DatabaseModule],
  controllers: [AppController]
})
export class AppModule {}
