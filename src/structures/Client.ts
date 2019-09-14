import { KlasaClient, KlasaClientOptions } from 'klasa';
import BotBindConsole from './BotBindConsole';

export default class Client extends KlasaClient {
  public console: BotBindConsole;

  constructor(options: KlasaClientOptions = {}) {
    super(options);
    this.console = new BotBindConsole(options.console);
  }
}
