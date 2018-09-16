var mysql = require('mysql');
var Promise = require('promise')
envConfig = require('./envConfig.js');
// Initialise database connection
function handleDisconnect() {
    connection = mysql.createConnection(envConfig.db_config);

    connection.connect(function(err) {
        if (err) {
            setTimeout(handleDisconnect, 2000);
        }
    });

    connection.on('error', function(err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

exports.getData = function(queryString){
        return new Promise(function(resolve, reject) {
        connection.query(queryString, function(err, data, fields) {
            if (err) {
                resolve(err)
            } else {
                resolve(data)
            }
        })
    })
}
