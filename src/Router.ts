import Express from 'express';
import log from 'signale';
import * as yup from 'yup';
import App from './App';

const getTicketsIdFromRequest = async ({ tickets }: { tickets: number[] }) => {
  const schema = yup.array().of(yup.number().min(1));

  await schema.validate(tickets);

  return tickets;
};

export const contentSchema = yup.object().shape({
  ticket: yup.object().shape({
    comment: yup.object().shape({
      body: yup.string().required(),
      author_id: yup.number().required(),
      public: yup.boolean().required(),
    }),
    fields: yup.array().of(
      yup.object().shape({
        id: yup.number().required(),
        value: yup.string().required(),
      }),
    ),
    status: yup.string(),
  }),
});

const getTicketContentFromRequest = async ({
  content,
}: {
  content: Record<string, any>;
}) => {
  await contentSchema.validate(content);
  return content;
};

const Router = () =>
  Express()
    .use(Express.json())
    .post('/', async (req, res) => {
      try {
        const tickets_ids = await getTicketsIdFromRequest(req.body);
        const content = await getTicketContentFromRequest(req.body);
        log.watch(`Incoming request with ${tickets_ids.length} ticket`);
        return App(tickets_ids, content, res);
      } catch (e) {
        log.fatal(e);
        return res.status(400).json('Corpo inválido da requisição');
      }
    });

export default Router;
