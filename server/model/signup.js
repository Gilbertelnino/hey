/* eslint-disable linebreak-style */
import express from 'express';
import uuid from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      const newEmployee = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash,
        gender: req.body.gender,
        jobRole: req.body.jobRole,
        department: req.body.department,
        address: req.body.address,
      };
      jwt.sign({ newEmployee }, 'secretkey', (error, token) => {
        res.status(201).json({
          status: 201,
          message: 'User created successfully',
          data: {
            token,
          },
        });
      });
      next();
    }
  });
});

export default router;
