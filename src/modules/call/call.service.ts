import { Injectable } from '@nestjs/common';
import { Call } from './call.entity'

@Injectable()
export class CallService {
    constructor() { }

    async logRequest(gameName) {
        try {
            const log = new Call({
                called_at: new Date(),
                asked_game: gameName
            });
            log.save();
        } catch (e) {
            console.log("test")
            throw Error(e);
        }
    }
}
