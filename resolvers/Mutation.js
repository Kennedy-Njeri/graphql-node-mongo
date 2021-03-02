const Post = require('../models/Post');
const User = require('../models/User');




const Mutation = {
    async createUser(parent, args) {
        let userData = new User({
            name: args.data.name,
            email: args.data.email
        })

        return userData.save()

    },
    async deleteUser(parent, args, {pubSub} = context, info) {

        const result = await User.findById(args.id)

        if (result) {
            return await result.remove()
        } else {
            throw new Error('User not found')
        }
    },
    async updateUser(parent, args, info) {
        let data = args.data
        return await User.findByIdAndUpdate({_id: args.id}, data, {
            new: true,
            runValidators: true
        },)

    },
    async createPost(parent, args, {pubSub} = context, info) {
        let postData = new Post({
            title: args.data.title,
            body: args.data.body,
            published: args.data.published
        })

        return await postData.save().then(result => {
            const post = result
            pubSub.publish('post', { post: {
                    mutation: 'CREATED',
                    data: post
                }})
            return post
        })
    },
    async deletePost(parent, args) {
        const result = await Post.findById(args.id)

        if (result) {
            return await result.remove()
        } else {
            throw new Error('Post not found')
        }
    },
    async updatePost (parent, args) {
        let data = args.data
        return await Post.findByIdAndUpdate({_id: args.id}, data, {
            new: true,
            runValidators: true
        },)
    }
}

module.exports = Mutation

