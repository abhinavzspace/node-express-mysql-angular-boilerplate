/**
 * Created by abhinav on 23/12/13.
 */
var config = {
    local: {
        mode: 'local',
        port: 3000
    },
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'production',
        port: 5000
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}