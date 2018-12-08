const fs = require('fs')

module.exports = function(context) {
    let filename = new Date().toISOString()
    filename = filename
        .replace(/-/g,'')
        .replace(/:/g,'')
        .replace(/\./s,'')
    filename += '.json'
    
    let payload_cache = fs.createWriteStream(`${__dirname}/../cache/${filename}`)
    payload_cache.write(JSON.stringify(context))
    payload_cache.end()
}