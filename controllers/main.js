require('dotenv')
require('express-async-errors')
const jwt = require('jsonwebtoken')
const { unauthenticated } = require('../errors')


const login = async (req, res) => {

    const {username, password} = req.body

    if(!username || !password){
      throw new unauthenticated('missing credentials!') 
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.WEB_TOKEN, {expiresIn:'30d'})
    
    res.json({msg:'user created', token})
}

const dashboard = async(req, res)=>{
        const {id, username} = req.user
        const lucky = Math.floor(Math.random()*100)
        res.status(200).json({msg:`hello ${username}`, secret:`your lucky number is ${lucky}`})
}

module.exports = {login, dashboard}