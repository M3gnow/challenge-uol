const colors = require('colors');
const moment = require('moment-timezone');

colors.enabled = true;

class Logger {
    constructor() {
        this.colors = {
            info: 'green',
            warn: 'yellow',
            error: 'red'
        };

        this.info = (...message) => this.log('info', ...message);
        this.warn = (...message) => this.log('warn', ...message);
        this.error = (...message) => this.log('error', ...message);
    }

    log(type, ...msg) {
        try {
            console.log(`${moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSSS')} - ${ colors[this.colors[type]](`[${type.toUpperCase()}]`) } -`, ...msg);
        } catch (error) {
            console.log(error);
            console.log(`${colors.red('[ERROR]')}  - Log type not found`);
        }
    }
}

module.exports = new Logger();