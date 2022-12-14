const path = require('path');
const multer = require('multer');
const { __esModule } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/avatar'));
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
})
const uploadFile = multer({ storage });
module.exports = uploadFile;
