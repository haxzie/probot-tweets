const labels = require('./lib/handleLabel')

module.exports = app => {
  // Your code here
  app.log('READY TO ROLL!')

  app.on('issues.labeled', labels.handle)
  
  // app.on('issue_comment.created', async context => {
  //   const issueComment = context.issue({ body: 'Thanks for commenting on this issue!' })
  //   return context.github.issues.createComment(issueComment)
  // })
}
