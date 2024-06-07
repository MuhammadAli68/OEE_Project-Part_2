const express = require("express");
const router = express.Router();
const path = require('path');
router.get("/8",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 8 Nest Run Data/output/withoutgroupshifts.csv"));
});

router.get("/8/shifts",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 8 Nest Run Data/output/withgroupshifts.csv"));
});
module.exports = router;
