import * as config from 'config';

const dbConfig = config.get('db');

interface SequelizeOptions {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
    dialect?: string;
    dialectOptions: any;
    timezone: string;
    logging: boolean;
}

export const sequelizeConfig: SequelizeOptions = {
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.type,
    dialectOptions: {
        options: {
            enableArithAbort: true,
            requestTimeout: 100000,
            useUTC: true, //for reading from database
            dateStrings: true,
            typeCast: function (field, next) {
                // for reading from database
                if (field.type === 'DATETIME') {
                    return field.string();
                }
                return next();
            },
        },
    },
    timezone: '+0:00', //for writing from database
    logging: false,
};