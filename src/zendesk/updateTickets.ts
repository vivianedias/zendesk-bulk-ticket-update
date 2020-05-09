import { Client } from './index';
import log from 'signale';

const updateTickets = async (
  tickets_ids: Array<number>,
  ticket: any,
  fn: Function,
) => {
  return tickets_ids.map((id, i: number) => {
    setTimeout(() => {
      return Client.tickets.update(
        id,
        ticket,
        async (error, _req, result: any) => {
          if (error) {
            log.fatal(`Ticket with id ${result.id} gave this error: ${error}`);
            return fn(false);
          }

          log.success(`Ticket with id ${result.id} was updated`);
          if (tickets_ids.length === i + 1) log.success('Finished batch');
          return fn(result.id, tickets_ids.length === i + 1);
        },
      );
    }, i * 2500);
  });
};

export default updateTickets;
