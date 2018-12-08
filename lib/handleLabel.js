const tweet = require('./tweet')
const config = require('../config')

const labels2tweet = config.labels

module.exports.handle = async function (context) {
    let {
        action,
        issue,
        label,
        repository
    } = context.payload

    if (action === "labeled" && labels2tweet.includes(label.name)) {
        console.log("Tweeting the issue")
        let status = `Beep Beep! an issue needs help in ${repository.full_name}, "${issue.title}" ${issue.html_url}`
        let response = await tweet(status)
        if (response && response.tweet_url) {
            let comment = `Just [tweeted out](${response.tweet_url}) this issue for help! `
            const issueComment = context.issue({ body: comment })
            return context.github.issues.createComment(issueComment)
        } else {
            console.error("Issue comment aborted due to invalid response")
            return
        }
    }
}