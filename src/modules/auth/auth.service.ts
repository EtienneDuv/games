import { Injectable, Res, } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    /**Check if username/pass exists in our "db" */
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        console.log("Credentials are wrong")
        return null;
    }

    /**Return JWT in cookie */
    async login(user: any, @Res() res: any) {
        const payload = { username: user.username, sub: user.userId }
        const access_token = this.jwtService.sign(payload)
        res.cookie('jwt', access_token)
        res.redirect('/')
    }
}
