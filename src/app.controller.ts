import { Controller, Get, Post, Render, Request, UseGuards, Res, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';

@Controller()
export class AppController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Get()
    @Render('index')
    default(@Req() req) {
        // console.log(req.headers)
        const messages = [
            'Welcome !', 
            'Hello there, what are we looking for today ?', 
            'Let\'s play a game....',
            'Psst Baldur\'s Gate is a great license',
            'Oh it\'s you ! Hi',
        ];
        return {
            // Display a random message from messages[], just for fun
            message: messages[Math.floor(Math.random() * messages.length)]
        }
    }

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Request() req, @Res() res) {
        // get form data to login user
        await this.authService.login(req.user, res);
        return
    }

    @Get('/login')
    @Render('login')
    async loginPage() {}

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
