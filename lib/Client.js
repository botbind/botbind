const { KlasaClient } = require("klasa");
const KlasaConsole = require("./util/KlasaConsole");

/**
 * Botbind's console class, extends Klasa's Console class.
 */
class BotbindClient extends KlasaClient {
  constructor(options = {}) {
    super(options);
    this.console = new KlasaConsole(this.options.console);
  }
}

module.exports = BotbindClient;
