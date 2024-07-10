const express = require("express");
const router = express.Router();
const path = require('path');
router.get("/2",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 2 Nest Run Data/output/withoutgroupshifts.csv"));
});

router.get("/2/shifts",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 2 Nest Run Data/output/withgroupshifts.csv"));
});
module.exports = router;
