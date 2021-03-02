// where we describe our subscription resolvers
const Subscription = {
    post: {
        subscribe (parent, args, { pubSub } = context, info)  {
            return pubSub.asyncIterator("post")
        }
    }

}


module.exports = Subscription