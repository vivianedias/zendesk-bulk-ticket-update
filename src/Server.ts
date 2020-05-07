import Router from './Router';
import log from 'signale';

const server = () => {
  const { PORT } = process.env;
  return Router().listen(Number(PORT), '0.0.0.0', () => {
    log.watch(`Server listening on PORT ${PORT}`);
  });
};

export default server;
