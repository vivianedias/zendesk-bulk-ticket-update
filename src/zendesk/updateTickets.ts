import { Client } from './index';
import log from 'signale';

const updateTickets = async (
  tickets_ids: Array<number>,
  ticket: any,
  fn: Function,
) => {
  return tickets_ids.forEach(id => {
    return Client.tickets.update(
      id,
      ticket,
      async (error, _req, result: any) => {
        if (error) {
          log.fatal(error);
          return fn(false);
        }

        log.success(`Ticket with id ${result.id} was updated`);

        return fn(result);
      },
    );
  });
};

export default updateTickets;
