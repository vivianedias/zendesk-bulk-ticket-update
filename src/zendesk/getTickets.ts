import { Client } from './index';
import log from 'signale';

const getTickets = (tickets: number[], fn: Function) => {
  return Client.tickets.showMany(tickets, (error: any, _req: any, res: any) => {
    if (error) {
      log.fatal(error);
      return fn(false);
    }
    return fn(res);
  });
};

export default getTickets;
