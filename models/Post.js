const mongoose = require('mongoose')




const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})




const Post = mongoose.model('Post', postSchema)


module.exports = Post