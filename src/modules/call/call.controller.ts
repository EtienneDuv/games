import { Controller, Get, Query, Render } from '@nestjs/common';
import { CallService } from '../call/call.service'

@Controller('calls')
export class CallController {

    constructor(
        private readonly callService: CallService,
    ) { }

    @Get('/')
    @Render('logs')
    async getLogsData() {
        try {
            const data = await this.callService.getLogs()
            return {
                logs: data,
            }
        } catch (e) {
            console.log(e)
        }
    }
}
