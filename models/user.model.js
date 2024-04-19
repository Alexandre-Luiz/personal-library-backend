import Sequelize from 'sequelize';
import db from '../repositories/db.js';

const User = db.sequelize.define(
  'users',
  {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default User;
