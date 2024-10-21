const express = require("express");
const router = express.Router();
const path = require('path');
router.get("/3",(req,res)=>{
    res.sendFile(path.resolve("../data/HSG/HSG Nest Run Data/HSG 3 Nest Run Data/output/withoutgroupshifts.csv"));
});

router.get("/3/shifts",(req,res)=>{
    res.sendFile(path.resolve("../data/HSG/HSG Nest Run Data/HSG 3 Nest Run Data/output/withgroupshifts.csv"));
});
module.exports = router;