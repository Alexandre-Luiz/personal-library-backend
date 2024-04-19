import express from 'express';
import User from '../models/user.model.js';

async function checkExistingUser(req, res, next) {
  try {
  } catch (err) {
    next(err);
  }
}

export default checkExistingUser;
