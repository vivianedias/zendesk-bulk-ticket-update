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
  const ticketsCallback = (t: any) => {
    if (!t) return res.status(500).json('Ticket update failed');
    return res.json(t);
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
