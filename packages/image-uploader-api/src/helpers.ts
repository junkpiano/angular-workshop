import path from "path";

const crypto = require('crypto');

const imageFilter = (req: any, file: any, cb: any) => {
    // accept image only

    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed'), false);
    }

    cb(null, true);
};

const fileNameFilter = (req: any, file: any, cb: any) => {
    const filename = crypto.randomBytes(16).toString('hex');
    cb(null, filename + "_" + Date.now() + path.extname(file.originalname));
};

export {imageFilter, fileNameFilter}
