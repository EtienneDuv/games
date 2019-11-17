import { Controller, Get, Render, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CallService } from '../call/call.service'

@Controller('calls')
export class CallController {

    constructor(
        private readonly callService: CallService,
    ) { }


    @UseGuards(AuthGuard('local'))
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
