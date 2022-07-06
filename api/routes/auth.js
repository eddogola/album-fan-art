import { PrismaClient } from '@prisma/client';

const express = require('express');
const router = express.Router();

require('dotenv').config();

const db = new PrismaClient();

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

router.post('/google', async (req, res) => {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();

    const user = await db.user.upsert({
        where: { email: email },
        update: { name, picture },
        create: { name, email, picture },
    });

    res.status(201).json(user)
})