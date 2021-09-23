const User = require('../models/user');
const shortId = require('shortid');

exports.signup = (req, res) => {

  //1. first we find if user exists
    // console.log(req.body);
    // we get this method from mongoose findOne : helps in finding particular user
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }

  //2. create a new user
        const { name, email, password } = req.body;
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;
  
  //3. save the new user
        let newUser = new User({ name, email, password, profile, username });
        newUser.save((err, success) => {
            if (err) {
                return res.status(400).json({
                    error: err
                });
            }
            // res.json({
            //     user: success
            // });
            res.json({
                message: 'Signup success! Please signin.'
            });
        });
    });
};
