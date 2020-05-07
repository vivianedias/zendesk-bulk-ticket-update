import Server from './Server';
import log from 'signale';

try {
  Server();
} catch (e) {
  log.fatal(e);
}
