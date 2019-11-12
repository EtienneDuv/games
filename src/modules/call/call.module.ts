import { Module } from '@nestjs/common';
import { CallController } from './call.controller';
import { CallService } from './call.service';
import { DatabaseModule } from '../database/database.module'

@Module({
  controllers: [CallController],
  providers: [CallService],
  exports: [CallService],
  imports: [DatabaseModule]
})
export class CallModule {}
