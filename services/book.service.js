import bookRepository from '../repositories/book.repository.js';

async function createNewBook(book) {
  try {
    // Validations
    if (book.rating < 1 || book.rating > 5) {
      throw new Error('Invalid rating. It must be between 1 and 5');
    }
    if (book.pagesRead > book.totalPage) {
      throw new Error('Number of pages read cannot be greater than the total pages');
    }

    if (book.year < 0) {
      throw new Error('Book year cannot be negative');
    }

    if (book.value < 0) {
      throw new Error('Book value cannot be negative');
    }

    return await bookRepository.createNewBook(book);
  } catch (error) {
    throw error;
  }
}

async function getBooksByUserId(userId) {
  try {
    return await bookRepository.getBooksByUserId(userId);
  } catch (error) {
    throw error;
  }
}

async function getBookById(bookId) {
  try {
    return await bookRepository.getBookById(bookId);
  } catch (error) {
    throw error;
  }
}

async function deleteBook(bookId) {
  try {
    return await bookRepository.deleteBook(bookId);
  } catch (error) {
    throw error;
  }
}

async function editBook(book) {
  try {
    // Validations
    if (book.rating < 1 || book.rating > 5) {
      throw new Error('Invalid rating. It must be between 1 and 5');
    }
    if (book.pagesRead > book.totalPage) {
      throw new Error('Number of pages read cannot be greater than the total pages');
    }

    if (book.year < 0) {
      throw new Error('Book year cannot be negative');
    }

    if (book.value < 0) {
      throw new Error('Book value cannot be negative');
    }
    return await bookRepository.updateBook(book);
  } catch (error) {
    throw error;
  }
}

export default { createNewBook, getBooksByUserId, getBookById, deleteBook, editBook };
