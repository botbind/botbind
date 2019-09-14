import { Command } from '../../../dist';

export default class Test extends Command {
  // eslint-disable-next-line class-methods-use-this
  async run(message) {
    return message.sendMessage('hi');
  }
}
