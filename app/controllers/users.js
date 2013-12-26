/**
 * Created by abhinav on 24/12/13.
 */

var user = require("../models/user");
exports.render = function(req, res){
    user.getAll(req.pool, function (err, vals) {
        if (err) return console.log("Error: " + err);
        console.log(vals);
        res.jsonp(vals);
    });
};