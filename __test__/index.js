import 'dotenv/config';
import plugin from './plugin';
import { Client } from '../dist';

Client.use(plugin);

const client = new Client({
  prefix: '!',
});

client.login(process.env.DISCORD_TOKEN);
