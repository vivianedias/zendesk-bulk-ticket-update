import Express from 'express';

const Router = () =>
  Express()
    .use(Express.json())
    .get('/', (_req, res) => {
      return res.json('olá!');
    });

export default Router;
