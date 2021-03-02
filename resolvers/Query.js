const Post = require('../models/Post');
const User = require('../models/User');

const Query = {
    async users(parent, args) {
        return await User.find({})
    },
    async post(parent, args) {
        return await Post.find({})
    }
}


module.exports = Query