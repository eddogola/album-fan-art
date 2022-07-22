const { PrismaClient } = require('@prisma/client');

const express = require('express');
const router = express.Router();

// set up prisma
const prisma = new PrismaClient();

async function writeToDb(b64Img, auth) {
    await prisma.userArt.upsert({
        where: {
            userNickname: auth.nickname,
        },
        update: {
            // add artwork, don't set it anew
            artWorks: {
                create: {
                    body: b64Img,
                },
            },
        },
        create: {
            userNickname: auth.nickname,
            artWorks: {
                create: {
                    body: b64Img,
                },
            },
        },
    })
}

router.post('/', (req, res) => {
    // const imgData = req.body;
    writeToDb(req.body.data, req.body.auth)
    // res.send(imgData);
})

module.exports = router;