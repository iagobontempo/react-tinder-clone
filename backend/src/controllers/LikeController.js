const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        console.log(req.io, req.connectedUsers)

        const { user } = req.headers
        const { devId } = req.params

        const loggedDev = await Dev.findById(user) // Its a MONGOOSE method - so now you can grab data from ex: loggedDev.avatar
        const targetDev = await Dev.findById(devId)

        if (!targetDev) {
            res.status(400).json({ error: 'Dev does not exist'})
        }

        if (targetDev.likes.includes(loggedDev._id)) { // Checking if targetDev.like have loggedDev._id
            // console.log("DEU MATCH")
            const loggedSocket = req.connectedUsers[user]
            const targetSocket = req.connectedUsers[devId]

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetDev)
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedDev)
            }
        }
        loggedDev.likes.push(targetDev._id) // The dev.likes its an array, we can insert data with push(). So i'm inserting targetDev._id (_id its the way mongodb put an id)

        await loggedDev.save() //Everytime you change data inside a "Dev" you need to save();

        return res.json(loggedDev)
    }
}