const express = require('express');
const config = require('./DatabaseConnection/DB.js');
const sql = require('mssql');

const poolPromise = sql.connect(config);  // Create a pool promise
module.exports = poolPromise;
const app = express();
const PORT = 3000;

app.use("/HSG",require('./Routes/hsg8'));
app.use("/HSG",require('./Routes/hsg7'));
app.use("/HSG",require('./Routes/hsg6'));
app.use("/HSG",require('./Routes/hsg5'));
app.use("/HSG",require('./Routes/hsg4'));
app.use("/HSG",require('./Routes/hsg3'))
app.use("/HSG",require('./Routes/hsg2'));
app.use("/HSG",require('./Routes/hsg1'));
app.use("/Bystronic",require('./Routes/Bystronic12K'));
app.listen(PORT,()=>{
    console.log(`Server listening requests on port: ${PORT}`)
})