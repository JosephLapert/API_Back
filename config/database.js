const mariadb = require('mariadb');


const pool = mariadb.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
    
})

module.exports = pool;

/** Config pour se connecter à mariaDB pour la prod*/ 
