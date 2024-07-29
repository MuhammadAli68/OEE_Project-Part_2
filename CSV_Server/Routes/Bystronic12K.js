const express = require("express");
const router = express.Router();
const config = require('../DatabaseConnection/DB.js');
const sql = require('mssql');

router.get("/12K",async (req,res)=>{
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT TOP 10 * FROM [dbo].[Bystronic12K]');
        // console.log("Result Keys:", Object.keys(result));
        // console.log("Result Object:", result);
        if (result.recordset) {
            res.json(result.recordset);
        } else {
            console.log('No records found.');
        }
        await pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
});

router.get("/12K/shifts",async(req,res)=>{
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT TOP 10 * FROM [dbo].[Bystronic12K_shifts]');
        // console.log("Result Keys:", Object.keys(result));
        // console.log("Result Object:", result);
        if (result.recordset) {
            res.json(result.recordset);
        } else {
            console.log('No records found.');
        }
        await pool.close();
    } catch (err) {
        console.error('SQL error', err);
    }
});
module.exports = router;
