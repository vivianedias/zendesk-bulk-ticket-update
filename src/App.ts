import { Response } from 'express';
import {
  // updateTickets
  getTickets
} from './zendesk';

const App = async (tickets_id: number[], res: Response) => {
  const ticketsCallback = (t: any) => {
    if (!t)
      return res.status(500).json('Não foi possível atualizar os tickets');
    return res.json(t);
  };

  getTickets(tickets_id, ticketsCallback);
};

export default App;
