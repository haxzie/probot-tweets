const Twitter = require('twitter')
const config = require('../config')
const twitterClient = new Twitter(config)

twitterClient.post('statuses/update', {status: "Hello World!"})
    .then(tweet => {
        console.log(tweet)
    })
    .catch(error => {
        console.log(error)
    })