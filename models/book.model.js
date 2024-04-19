import Sequelize from 'sequelize';
import db from '../repositories/db.js';
import User from './user.model.js';

const Book = db.sequelize.define(
  'books',
  {
    bookId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    comments: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    imageFileName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    publisher: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    totalPages: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pagesRead: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    favorite: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

Book.belongsTo(User, { foreignKey: 'userId' });

export default Book;
