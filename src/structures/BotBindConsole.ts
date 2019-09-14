import {
  ConsoleOptions,
  constants,
  Colors,
  Timestamp,
  ConsoleColorStyles,
  ConsoleColorObjects,
  ColorsFormatOptions,
} from 'klasa';
import { inspect } from 'util';
import fetch from 'node-fetch';

interface BotBindConsoleOptions extends ConsoleOptions {
  logAPI?: boolean;
  endpoint?: string;
  auth?: string;
}

type ConsoleMethods = 'log' | 'error' | 'warn' | 'info';

const types = {
  debug: 'log',
  error: 'error',
  log: 'log',
  verbose: 'log',
  warn: 'warn',
  wtf: 'error',
  info: 'info',
};

// KlasaConsole's constructor is private so we can't extend
export default class BotBindConsole extends console.Console {
  // eslint-disable-next-line no-undef
  public stdout: NodeJS.WritableStream;
  // eslint-disable-next-line no-undef
  public stderr: NodeJS.WritableStream;
  public logAPI: boolean;
  public endpoint: string;
  public auth: string;
  public template: Timestamp | null;
  public colors: Partial<
    Record<keyof ConsoleColorStyles, Partial<Record<keyof ConsoleColorObjects, Colors>>>
  >;
  public utc?: boolean;

  constructor(options: BotBindConsoleOptions = {}) {
    const mergeOptions = {
      ...constants.DEFAULTS.CONSOLE,
      logAPI: false,
      endpoint: '',
      auth: '',
      ...options,
    };

    super(mergeOptions.stdout, mergeOptions.stderr);

    this.stdout = mergeOptions.stdout;
    this.stderr = mergeOptions.stderr;
    this.logAPI = mergeOptions.logAPI;
    this.endpoint = mergeOptions.endpoint;
    this.auth = mergeOptions.auth;

    Colors.useColors = mergeOptions.useColor === undefined ? false : mergeOptions.useColor;

    this.template = mergeOptions.timestamps
      ? new Timestamp(
          mergeOptions.timestamps === true ? 'YYYY-MM-DD HH:mm:ss' : mergeOptions.timestamps,
        )
      : null;

    this.colors = {};

    Object.entries(mergeOptions.colors).forEach(([name, formats]) => {
      const typedName = <keyof ConsoleColorStyles>name;

      this.colors[typedName] = {};
      Object.entries(formats).forEach(([type, format]) => {
        const typedType = <keyof ConsoleColorObjects>type;
        const typedFormat = <ColorsFormatOptions>format;

        this.colors[typedName]![typedType] = new Colors(typedFormat);
      });
    });

    this.utc = options.utc;
  }

  get timestamp() {
    if (!this.template) return null;
    return this.utc ? this.template.displayUTC() : this.template.display();
  }

  write(data: any[], type: keyof ConsoleColorStyles = 'log') {
    const enhancedData = data.map<string>(BotBindConsole.flatten);
    const { time, message } = this.colors[type]!;
    const timestamp = this.template ? time!.format(`[${this.timestamp}]`) : '';
    const enhancedType = <ConsoleMethods>types[type];

    console[enhancedType](
      enhancedData.map(str => `${timestamp} ${message!.format(str)}`).join('\n'),
    );
  }

  log(...data: any[]) {
    this.write(data, 'log');

    if (this.logAPI) this.postLogs(data, 'log');
  }

  warn(...data: any[]) {
    this.write(data, 'warn');

    if (this.logAPI) this.postLogs(data, 'warn');
  }

  error(...data: any[]) {
    this.write(data, 'error');

    if (this.logAPI) this.postLogs(data, 'error');
  }

  debug(...data: any[]) {
    this.write(data, 'debug');

    if (this.logAPI) this.postLogs(data, 'debug');
  }

  verbose(...data: any[]) {
    this.write(data, 'verbose');

    if (this.logAPI) this.postLogs(data, 'verbose');
  }

  wtf(...data: any[]) {
    this.write(data, 'wtf');

    if (this.logAPI) this.postLogs(data, 'wtf');
  }

  static flatten(data: any) {
    if (typeof data === 'string') return data;
    if (typeof data === 'object') {
      const isArray = Array.isArray(data);

      if (isArray && data.every((datum: any) => typeof datum === 'string')) return data.join('\n');

      return (
        data.stack ||
        data.message ||
        inspect(data, {
          depth: Number(isArray),
          colors: Colors.useColors === null ? undefined : Colors.useColors,
        })
      );
    }
    return data.toString();
  }

  async postLogs(data: any[], type: keyof ConsoleColorStyles) {
    try {
      await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: this.auth,
        },
        body: JSON.stringify({ type, message: data[0] }),
      });
    } catch (err) {
      this.wtf(err);
    }
  }
}
