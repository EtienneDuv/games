import { Controller, Get, Render, UseGuards, Res } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CallService } from '../call/call.service'

@Controller('calls')
export class CallController {

    constructor(
        private readonly callService: CallService,
    ) { }


    @UseGuards(AuthGuard('jwt'))
    @Get('/')
    @Render('logs')
    async getLogsData(@Res() res) {
        try {
            console.log()
            const data = await this.callService.getLogs()
            return {
                logs: data,
            }
        } catch (e) {
            console.log(e)
            res.redirect('/login')
        }
    }
}
