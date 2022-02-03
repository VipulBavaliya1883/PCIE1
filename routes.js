var express = require('express');
var router = express.Router();
var project = require('./models/project')
/* var User = require('./Models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken') */



//to fetch projects
router.get('/projects',async(req,res)=>{
    const iproject = await project.find()
    res.send(iproject)
})

//to add the projects
router.post("/projects",async(req,res)=>{
    const iproject = new project({
        name:req.body.name,
        rating:req.body.rating
    })

    await iproject.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating projects

router.patch('/projects/:id',async (req,res)=>{
    const iproject = await project.findOne({_id:req.params.id})
    imovie.name = req.body.name
    imovie.rating = req.body.rating
    await iproject.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/projects/:name",async(req,res)=>{
    await project.deleteOne({name:req.params.name},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})


/* router.post('/users',async(req,res)=>{
    
    //generate salt key
    salt = await bcrypt.genSalt(10)
    console.log(salt)

    hashedpswd = await bcrypt.hash(req.body.password,salt)
    console.log(hashedpswd)

    const iuser = new User({
        uname:req.body.uname,
        password:hashedpswd
    })  
    await iuser.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

}) */
module.exports = router 