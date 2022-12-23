const fs = require('fs') ;
const path = require('path') ;

const serverLogStream = fs.createWriteStream(path.join(__dirname+"/.." , '/logs/access.log') , {flag : 'a' , interval :'7d'}) ;

module.exports = serverLogStream ;