import { Client } from '../dist';

export default {
  [Client.plugin]() {
    this.commands.registerCoreDirectory(`${__dirname}/`);
  },
};
