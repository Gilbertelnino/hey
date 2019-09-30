/* eslint-disable linebreak-style */
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.post('/', (req, res, next) => {
  const employeeLogIn = {
    email: req.body.email,
    password: req.body.password,
  };
  jwt.sign({ employeeLogIn }, 'secretword', (err, token) => {
    res.status(200).json({
      status: 200,
      messsage: 'User is successfully logged in',
      data: {
        token,
      },
    });
  });
  next();
});
export default router;
