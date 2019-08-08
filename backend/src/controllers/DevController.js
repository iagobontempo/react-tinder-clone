const axios = require('axios');
const Dev = require('../models/Dev'); // Schema import

module.exports = {
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