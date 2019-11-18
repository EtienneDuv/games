import { Injectable } from '@nestjs/common';
import { Call } from './call.entity'

@Injectable()
export class CallService {
    constructor() { }

    async logRequest(gameName) {
        const log = new Call({
            called_at: new Date(),
            asked_game: gameName,
        });
        log.save();
    }

    async getLogs() {
        let processedLogs = [];
        const data = await Call.findAll()
        data.forEach(log => {
            if (log.dataValues.called_at.getDay() === 1 ) { //getDay 0 is Sunday
                processedLogs.push({
                    id: log.dataValues.id,
                    date: log.dataValues.called_at,
                    game: log.dataValues.asked_game,
                });
            }
        });
        return processedLogs
    }
}
