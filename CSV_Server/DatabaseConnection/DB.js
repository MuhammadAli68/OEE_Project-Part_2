const config = {
    user: 'OEEadmin', // better stored in an app setting such as process.env.DB_USER
    password: '!CGd@6ajWiX3Hj5', // better stored in an app setting such as process.env.DB_PASSWORD
    server: 'myfreeoeedbserver.database.windows.net', // better stored in an app setting such as process.env.DB_SERVER
    port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: 'myfreeoeedb', // better stored in an app setting such as process.env.DB_NAME
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
//    stream:true
}

module.exports = config;