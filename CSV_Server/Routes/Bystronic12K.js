const express = require("express");
const router = express.Router();
// const config = require('../DatabaseConnection/DB.js');
// const sql = require('mssql');
const poolPromise = require('../CSV_Server.js');

router.get("/12K",async (req,res)=>{
    try {
        // let pool = await sql.connect(config);
        const pool = await poolPromise;  // Wait for the pool to be ready
        let result = await pool.request().query('SELECT * FROM [dbo].[Bystronic12K]');
        // console.log("Result Keys:", Object.keys(result));
        // console.log("Result Object:", result);
        if (result.recordset) {
            res.json(result.recordset);
        } else {
            console.log('No records found.');
        }
        // await pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
});

router.get("/12K/shifts",async(req,res)=>{
    try {
        // let pool = await sql.connect(config);
        const pool = await poolPromise;  // Wait for the pool to be ready
        let result = await pool.request().query('SELECT * FROM [dbo].[Bystronic12K_shifts]');
        // console.log("Result Keys:", Object.keys(result));
        // console.log("Result Object:", result);
        if (result.recordset) {
            res.json(result.recordset);
        } else {
            console.log('No records found.');
        }
        // await pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
});
module.exports = router;
