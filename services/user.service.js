import userRepository from '../repositories/user.repository.js';

async function createUser(newUser) {
  return await userRepository.createUser(newUser);
}

async function getUserByUserName(username) {
  return await userRepository.getUserByUserName(username);
}

export default { createUser, getUserByUserName };
