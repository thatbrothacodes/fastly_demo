import dbConfig from './db';

const environment = process.env.NODE_ENV || 'local';

export default {
    "database": {
        "host": dbConfig[environment].host,
        "database": dbConfig[environment].database,
        "username": dbConfig[environment].username,
        "password": dbConfig[environment].password
    }
}
