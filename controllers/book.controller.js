import bookService from '../services/book.service.js';
import path from 'path';
import fs from 'fs';
import { storageDestination } from '../middlewares/multerConfig.js';

async function createNewBook(req, res, next) {
  try {
    const book = JSON.parse(req.body.bookData);
    const imageFileName = req.file.filename;
    book.imageFileName = imageFileName;

    // Checking if the user logged in is the one trying to create the new entry
    if (book.userId !== req.session.user.userId) {
      return res.status(403).send({ message: 'Forbidden' });
    }
    res.status(200).send(await bookService.createNewBook(book));
  } catch (error) {
    next(error);
  }
}

async function getBooksByUserId(req, res, next) {
  try {
    const userId = req.params.userId;

    // Checking if the user logged in is the one trying to create the new entry
    if (userId !== req.session.user.userId.toString()) {
      return res.status(403).send({ message: 'Forbidden' });
    }
    res.status(200).send(await bookService.getBooksByUserId(userId));
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  const bookId = req.params.bookId;
  try {
    const book = await bookService.getBookById(bookId);

    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }

    // Checking if the user logged in is the one trying to create the new entry
    if (book.userId !== req.session.user.userId) {
      return res.status(403).send({ message: 'Forbidden' });
    }

    // Delete the book cover image from the storage - getting the path from multerConfig
    const imageFileName = book.imageFileName;
    const imagePath = path.join(storageDestination, imageFileName);
    fs.unlinkSync(imagePath);

    // Delete book
    await bookService.deleteBook(bookId);
    res.status(200).send({ message: 'Book deleted sucessfully' });
  } catch (error) {
    next(error);
  }
}

async function editBook(req, res, next) {
  const book = JSON.parse(req.body.bookData);

  if (req.file) {
    // Deleting the old cover image
    const oldCoverImageName = book.imageFileName;
    const imagePath = path.join(storageDestination, oldCoverImageName);
    fs.unlinkSync(imagePath);

    // Updating the name of the new cover image
    const newImageFileName = req.file.filename;
    book.imageFileName = newImageFileName;
  }

  try {
    // Checking if the user logged in is the one trying to create the new entry
    if (book.userId !== req.session.user.userId) {
      return res.status(403).send({ message: 'Forbidden' });
    }
    res.status(200).send(await bookService.editBook(book));
  } catch (error) {
    next(error);
  }
}

export default { createNewBook, getBooksByUserId, deleteBook, editBook };
