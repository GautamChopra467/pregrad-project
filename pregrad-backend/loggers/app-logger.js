const {createLogger , transports , format } = require("winston") ;

const logger = createLogger({
    transports : [
        new transports.File({ 
            filename: 'logs/error.log',
             level: 'error',
             colorize : true
         }),
        new transports.File({ 
            filename: 'logs/combined.log',
            colorize : true
     }),
    ]
}) 

module.exports = logger ;