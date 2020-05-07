import zendesk from 'node-zendesk';

const {
  ZENDESK_API_USER = '',
  ZENDESK_API_TOKEN = '',
  ZENDESK_API_URL = ''
} = process.env;

export default zendesk.createClient({
  username: ZENDESK_API_USER,
  token: ZENDESK_API_TOKEN,
  remoteUri: ZENDESK_API_URL
});
