import Book from '../models/book.model.js';

async function createNewBook(book) {
  try {
    return await Book.create(book);
  } catch (error) {
    throw error;
  }
}

async function getBooksByUserId(userId) {
  try {
    return await Book.findAll({
      where: {
        userId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function getBookById(bookId) {
  try {
    return await Book.findByPk(bookId, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function deleteBook(bookId) {
  try {
    await Book.destroy({
      where: {
        bookId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateBook(book) {
  try {
    await Book.update(book, {
      where: {
        bookId: book.bookId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default { createNewBook, getBooksByUserId, getBookById, deleteBook, updateBook };
