import Express from 'express';
import log from 'signale';
import * as yup from 'yup';
import App from './App';

const getTicketsIdFromRequest = async ({ tickets }: { tickets: number[] }) => {
  const schema = yup.array().of(yup.number().min(1));

  await schema.validate(tickets);

  return tickets;
};

const Router = () =>
  Express()
    .use(Express.json())
    .post('/', async (req, res) => {
      try {
        const tickets = await getTicketsIdFromRequest(req.body);
        log.watch(`Incoming request with ${tickets.length} ticket id's`);
        return App(tickets, res);
      } catch (e) {
        log.fatal(e);
        return res.status(400).json('Corpo inválido da requisição');
      }
    });

export default Router;
