import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Entities } from '';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'manny.db.elephantsql.com',
                port: 5432,
                username: 'neovdbxk',
                password: 'xpQcU8ODMeYmFuAk_cT689pHzILL7Fkx',
                database: 'neovdbxk',
            });
            sequelize.addModels([Entities]);
            await sequelize.sync();
            return sequelize;
        },
    },
];

@Injectable()
export class DatabaseService {}
