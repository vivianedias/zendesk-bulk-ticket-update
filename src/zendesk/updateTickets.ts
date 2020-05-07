import { Client } from './index';
import log from 'signale';

const updateTickets = (tickets: any, fn: Function) => {
  return Client.tickets.updateMany(
    tickets,
    (error: any, _req: any, res: any) => {
      if (error) {
        log.fatal(error);
        return fn(false);
      }
      return fn(res);
    }
  );
};

export default updateTickets;
