import User from '../models/user.model.js';

async function createUser(newUser) {
  try {
    return await User.create(newUser);
  } catch (err) {
    throw err;
  }
}

async function getUserByUserName(username) {
  try {
    return await User.findOne({
      where: { username: username },
    });
  } catch (err) {
    throw err;
  }
}

export default { createUser, getUserByUserName };
