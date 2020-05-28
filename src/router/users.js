const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/api/signup', async (req, res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/api/signin', async (req, res) => {
   // console.log("Signing in buddy")
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        //console.log(user)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/myprofile', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/api/updateMyProfile',auth ,async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'password',"addresses"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = req.user

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        res.status(202).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/api/logout', auth, async (req, res) => {
    req.user.tokens=req.user.tokens.filter((token)=>{
        if(token.token != req.token)
        {
            return token
        }
        })
        try{
           // console.log(req.user.token)
           await req.user.save()
            res.status(200).send("Logout Sucessfull")
        }catch(e){
            res.send(e)
        }
})

router.get('/api/logoutAll', auth, async (req, res) => {
    req.user.tokens=[]
        
        try{
            console.log(req.user.tokens)
            await req.user.save()
            res.status(200).send("Logout Sucessfull")
        }catch(e){
            res.send(e)
        }
})

 
module.exports = router 