import multer from 'multer';
import path from 'path';
import getImageName from '../helpers/getImageFileName.js';

// Imports to use dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storageDestination = path.join(__dirname, '../../client/public/bookCovers');

const storage = multer.diskStorage({
  destination: storageDestination,
  filename: function (req, file, cb) {
    const userId = req.session.user.userId;
    const filename = getImageName(userId);

    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

export { upload, storageDestination };
