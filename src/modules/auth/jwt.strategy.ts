import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Req } from '@nestjs/common';
import { jwtConstants } from './constants';

 let cookieExtractor = function (req: any) {
     let token = null;
     if (req && req.cookies) token = req.cookies['jwt'];
     return token;
 };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            // jwtFromRequest: cookieExtractor(req),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        console.log(payload)
        return { userId: payload.sub, username: payload.username };
    }
}
