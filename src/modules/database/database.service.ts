import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Call } from '../call/call.entity';

export const databaseProviders = [
    {
        provide: 'U+Db',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'manny.db.elephantsql.com',
                port: 5432,
                username: 'neovdbxk',
                password: 'xpQcU8ODMeYmFuAk_cT689pHzILL7Fkx',
                database: 'neovdbxk',
                logging: false,
            });
            sequelize.addModels([Call]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
