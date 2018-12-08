const Twitter = require('twitter')
const config = require('../config')
const createCache = require('./createCache')

const twitterClient = new Twitter(config)

async function tweet(message) {
    console.log("Initiating tweet")

    try {
        let response = await twitterClient.post('statuses/update', {
            status: message
        });
        createCache(response);
        response.tweet_url = `https://twitter.com/${config.twitter_username}/status/${response.id_str}`
        console.log(`Tweet success ${response.tweet_url}`)
        return response;
    } catch (err) {
        console.log("ERROR: Unable to tweet")
        console.error(err)
        return
    }

}

module.exports = tweet