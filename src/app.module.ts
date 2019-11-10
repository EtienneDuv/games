import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { CallModule } from './modules/call/call.module';
import { AppController } from './app.controller'

@Module({
  imports: [GameModule, CallModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
