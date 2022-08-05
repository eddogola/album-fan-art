const { PrismaClient } = require('@prisma/client');

const express = require('express');
const router = express.Router();

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
    const runQueries = async () => {
        // get user nickname from request params
        const nickname = req.query.nickname;

        console.log("##################################")
        console.log(nickname)
        console.log("##################################")

        // get UserArt(user) using nickname
        const user = await prisma.userArt.findUnique({
            where: {
                userNickname: nickname,
            },
        })
        // then get UserArtId(user id) from user
        // get ArtWork(covers) using UserArtId
        const covers = await prisma.artWork.findMany({
            where: {
                userArtId: user.id,
            },
        })
        
        return covers;
    }

    const covers = await runQueries();
    
    // return covers
    res.send(covers)
})

module.exports = router;