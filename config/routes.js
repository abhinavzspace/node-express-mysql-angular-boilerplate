/**
 * Created by abhinav on 24/12/13.
 */
var users = require('../app/controllers/users');
var index = require('../app/controllers/index');
module.exports = function(app) {
    app.get('/', index.render);
    app.get('/users', users.render);
};
