/* globals module */

module.exports = function(data) {
    return {
        home(req, res) {
            return res.send({
                user: req.user
            });
        }
    };
};