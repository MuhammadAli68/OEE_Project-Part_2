const express = require("express");
const router = express.Router();
const path = require('path');
router.get("/6",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 6 Nest Run Data/output/withoutgroupshifts.csv"));
});

router.get("/6/shifts",(req,res)=>{
    res.sendFile(path.resolve("T:/HSG/HSG Nest Run Data/HSG 6 Nest Run Data/output/withgroupshifts.csv"));
});
module.exports = router;
