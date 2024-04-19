import bcrypt from 'bcrypt';
import userService from '../services/user.service.js';
import { checkForSpecialCharacters } from '../helpers/signupValidation.js';
import { checkForSpace } from '../helpers/signupValidation.js';
import * as dotenv from 'dotenv';
dotenv.config();

async function signup(req, res, next) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(422).json({ message: 'Fill username and password' });
    }

    // Validating username
    if (checkForSpecialCharacters(username)) {
      throw new Error('Invalid username. Only - and _ are allowed');
    }
    if (checkForSpace(username)) {
      throw new Error('Invalid username. Spaces are not allowed');
    }
    // Validating password
    if (checkForSpace(password)) {
      throw new Error('Invalid password. Spaces are not allowed');
    }

    // hashing password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // building data to persist on db
    const data = {
      username: username,
      password: passwordHash,
    };

    const user = await userService.createUser(data);

    if (user) {
      req.session.user = {
        message: 'User created and successfully logged in',
        userId: user.userId,
        username: user.username,
      };
      return res.status(200).json(req.session.user);
    } else {
      return res.status(409).json({ status: 409, message: 'Signup failed' });
    }
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await userService.getUserByUserName(username);

    if (user) {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.user = {
          message: 'User successfully logged in',
          userId: user.userId,
          username: user.username,
        };
        // return res.status(200).json({ message: 'User successfully logged in', user: req.session.user });
        return res.status(200).json(req.session.user);
      } else {
        return res.status(401).json({ status: 401, message: 'Wrong password' });
      }
    } else {
      return res.status(401).json({ status: 401, message: 'User not found' });
    }
  } catch (err) {
    next(err);
  }
}

async function signout(req, res, next) {
  if (req.session.user) {
    req.session.destroy(function (err) {
      res.status(200).json({ message: 'Logout successful' });
    });
  } else {
    res.status(401).json({ status: 401, message: 'Not authenticated' });
  }
}

async function getUser(req, res, next) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(401).json({ status: 401, message: 'Not authenticated' });
  }
}

export default {
  signup,
  login,
  getUser,
  signout,
};
