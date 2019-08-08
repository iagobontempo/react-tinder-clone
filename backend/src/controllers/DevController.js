const axios = require('axios');
const Dev = require('../models/Dev'); // Schema import

module.exports = {
    async index(req, res) {
        const { user } = req.headers

        const loggedDev = await Dev.findById(user) // Mongoose method

        const users = await Dev.find({ // Mongoose method
            $and: [ //$and to apply many filters
                { _id: { $ne: user } }, //$ne = NOT EQUAL
                { _id: { $nin: loggedDev.likes } },//$nin = NOT IN some list
                { _id: { $nin: loggedDev.dislikes } },
            ]
        })

        return res.json(users)
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username })  //findOne its a MONGOOSE method

        if (userExists) {
            return res.json(userExists)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`)
        // console.log(response.data); // Axios always returns the response inside a .data (prop)

        const { name, bio, avatar_url } = response.data

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar: avatar_url
        });

        return res.json(dev)
    }
};