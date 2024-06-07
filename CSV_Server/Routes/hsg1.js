const express = require("express");
const router = express.Router();
const path = require('path');
router.get("/1",(req,res)=>{
    res.sendFile(path.resolve("../data/HSG/HSG Nest Run Data/HSG 1 Nest Run Data/output/withoutgroupshifts")); //T:/HSG/HSG Nest Run Data/HSG 1 Nest Run Data/output/withoutgroupshifts.csv
});

router.get("/1/shifts",(req,res)=>{
    res.sendFile(path.resolve("../data/HSG/HSG Nest Run Data/HSG 1 Nest Run Data/output/withgroupshifts.csv"));
});
module.exports = router;
