const { KlasaConsole } = require("klasa");
const fetch = require("node-fetch");

/**
 * Botbind's console class, extends Klasa's Console class.
 */
class BotbindConsole extends KlasaConsole {
  constructor(options = {}) {
    super(options);
    this.logAPI = options.logAPI || false;
    this.endpoint = options.endpoint || "";
    this.auth = options.auth || "";
  }

  log(...data) {
    this.write(data, "log");
    this.logAPI && postLogs("log", data, this.endpoint, this.auth);
  }

  warn(...data) {
    this.write(data, "warn");
    this.logAPI && postLogs("warn", data, this.endpoint, this.auth);
  }

  error(...data) {
    this.write(data, "error");
    this.logAPI && postLogs("error", data, this.endpoint, this.auth);
  }

  debug(...data) {
    this.write(data, "debug");
    this.logAPI && postLogs("debug", data, this.endpoint, this.auth);
  }

  verbose(...data) {
    this.write(data, "verbose");
    this.logAPI && postLogs("verbose", data, this.endpoint, this.auth);
  }

  wtf(...data) {
    this.write(data, "wtf");
    this.logAPI && postLogs("wtf", data, this.endpoint, this.auth);
  }
}

const postLogs = (level, data, endpoint, auth) => {
  fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth
    },
    body: JSON.stringify({ level, message: data[0] })
  }).catch(error => {
    console.error(error);
  });
};

module.exports = BotbindConsole;
