import express from 'express';
import bookController from '../controllers/book.controller.js';
import { upload } from '../middlewares/multerConfig.js';

const router = express.Router();

router.post('/', upload.single('bookImage'), bookController.createNewBook);
router.put('/', upload.single('bookImage'), bookController.editBook);
router.get('/:userId', bookController.getBooksByUserId);
router.delete('/:bookId', bookController.deleteBook);

export default router;
