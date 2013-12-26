/**
 * Created by abhinav on 25/12/13.
 */

// callback(err, vals)
module.exports.getAll = function (pool, callback) {
    pool.getConnection(function(err, connection) {
        if (err) return callback(err);
        connection.query( 'SELECT * FROM users', function(err, rows) {
            if (err) return callback(err);
            connection.release();
            callback(null, rows);
        });
    });
};