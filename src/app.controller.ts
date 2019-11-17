import { Controller, Get, Post, Render, Request, UseGuards, } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {

    @Get()
    @Render('index')
    default() {
        return { message: "Welcome !"}  
        // May be used with cookies to display other things later
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return req.user;
    }
}
