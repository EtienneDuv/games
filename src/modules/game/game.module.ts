import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { CallModule } from 'modules/call/call.module';

@Module({
  providers: [GameService],
  controllers: [GameController],
  imports: [CallModule],
})
export class GameModule {}
