/* eslint-disable linebreak-style */
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
router.post('/', (req, res, next) => {
  const newArticle = {
    title: req.body.title,
    article: req.body.article,
  };
});
export default router;
