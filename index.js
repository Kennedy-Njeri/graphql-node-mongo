const express = require('express');
const { GraphQLServer, PubSub }  =  require('graphql-yoga')
const Query  = require( './resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const schema = require('./schema/schema');
const Subscription =  require('./resolvers/Subscription')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));





const pubSub = new PubSub()



const url = "mongodb://localhost:27017/web";
const connect = mongoose.connect(url, { useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true });
connect.then((db) => {
    console.log('Connected correctly to server!');
}, (err) => {
    console.log(err);
});


const server = new GraphQLServer({
    typeDefs: schema,
    resolvers: {
        Query,
        Subscription,
        Mutation,
    },
    context: {
        pubSub: pubSub
    }

})

// const app = express();
//
// app.use(bodyParser.json());
// app.use('*', cors());


server.start(() => console.log('Server is running on localhost:4000'))