import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './model/signup';
import signinRouter from './model/signin';
import articleRouter from './model/article';
import editRouter from './model/editArticle';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/auth/signup', router);
app.use('/api/v1/auth/signin', signinRouter);
app.use('/api/v1/articles', articleRouter);
app.use('/api/v1/articles/<articleId>', editRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
