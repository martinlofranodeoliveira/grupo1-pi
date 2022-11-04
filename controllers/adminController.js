const path = require("path");

const adminController = {
    admin: (req, res) => {
        
        res.render("admin", {
            title: 'Area Administrativa',
        });
    },
};
module.exports = adminController