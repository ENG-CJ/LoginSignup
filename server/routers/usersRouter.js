const express = require('express');
const { validateUser } = require('../controllers/users.controler');
const r = express.Router();


r.get("/",validateUser)

module.exports=r;