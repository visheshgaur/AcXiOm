const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    // if(!name||!email||!password||!role){
    //    return res.status.json({
    //         message:"all fields are necesaary",
    //         success:false
    //     })
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword, role });
    res.json({ token: generateToken(user._id, user.role) });
    // return res.status.json({
    //     message:"registered successfullly",
    //     success:true
    // })
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ token: generateToken(user._id, user.role) });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
