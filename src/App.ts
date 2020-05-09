import { Response } from 'express';
import {
  updateTickets,
  // getTickets
} from './zendesk';
import log from 'signale';
import { contentSchema } from './Router';
import * as yup from 'yup';

type ContentTypes = yup.InferType<typeof contentSchema>;

const App = async (
  tickets_id: number[],
  content: ContentTypes,
  res: Response,
) => {
  let arr: Array<number> = new Array();

  const ticketsCallback = (t: any, done: boolean) => {
    if (!t) return res.status(500).json('Ticket update failed');
    arr.push(t);
    if (done) res.json(arr);
  };

  // getTickets(tickets_id, ticketsCallback);
  try {
    await updateTickets(tickets_id, content, ticketsCallback);
  } catch (e) {
    log.fatal(e);
    throw new Error('Ticket update failed');
  }
};

export default App;
