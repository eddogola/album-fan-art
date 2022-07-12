const { PrismaClient, prisma } = require('@prisma/client');

const express = require('express');
const router = express.Router();

require('dotenv').config();

router.post('/login', (req, res, next) => {
    
})

const db = new PrismaClient();

module.exports = router;