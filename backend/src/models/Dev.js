const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{ // This part its refering to Dev - relacionando como se fosse uma chave estrangeira
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }], 
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, //Add a createdAt and updatedAt prop at this schema
});

module.exports = model('Dev', DevSchema); // model('Name', NameSchema)
