import { Call } from './call.entity';

export const CallProvider = [
    {
        provide: 'CALLS_REPOSITORY',
        useValue: Call,
    },
];

/**  File looks weird, I dont get it (https://docs.nestjs.com/recipes/sql-sequelize)
 * Is it just to have an alias ?
*/