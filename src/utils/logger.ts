import pino from 'pino';

class SampleLoanApp {
  private logEngine;
  private serviceName: string;

  private constructor(serviceName: string) {
    this.logEngine = pino({ level: 'trace' });
    this.serviceName = serviceName;
  }

  static getInstance(serviceName: string) {
    return new SampleLoanApp(serviceName);
  }

  info(msg: string) {
    this.logEngine.info(`${this.serviceName} ${msg}`);
  }

  fatal(msg: string) {
    this.logEngine.fatal(`${this.serviceName} ${msg}`);
  }

  debug(msg: string) {
    this.logEngine.debug(`${this.serviceName} ${msg}`);
  }

  warn(msg: string) {
    this.logEngine.warn(`${this.serviceName} ${msg}`);
  }

  error(msg: string) {
    this.logEngine.error(`${this.serviceName} ${msg}`);
  }

  trace(msg: string) {
    this.logEngine.trace(`${this.serviceName} ${msg}`);
  }
}

export const logger = SampleLoanApp.getInstance('SampleLoanApp >>>');