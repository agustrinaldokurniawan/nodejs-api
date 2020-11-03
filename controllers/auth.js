const User = require('../models/user')

exports.login = (req, res)=>{
    const {username, password} = req.body

    User.findOne({username}, (err, user)=>{
        if(err) return res.json({message: err})

        if(password !== user.password){
            return res.json({message:"Wrong Password!"})
        }
        
        return res.json({user})
    })
}

exports.signup = (req, res)=>{
    const {username, password} = req.body

    const newUser = new User({
        username,
        password
    })

    newUser.save((err, user)=>{
        if(err) return res.json({message: err})
        return res.json({user})
    })
}