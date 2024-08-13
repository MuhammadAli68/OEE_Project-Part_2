const config = {
    user: process.env.DB_USER, // better stored in an app setting such as process.env.DB_USER
    password: process.env.DB_PASSWORD, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.DB_SERVER, // better stored in an app setting such as process.env.DB_SERVER
    port: Number(process.env.DB_PORT), // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.DB_NAME, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        options: {
            encrypt: true,
            enableArithAbort: true,
            debug: {
                packet: true,
                token: true,
                data: true,
                payload: true,
            }
        }
    },
    connectionTimeout: 120000  // 120 seconds
//    stream:true
}

module.exports = config;