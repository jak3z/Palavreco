const { newWord } = require('./database.js');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = {
	loopUtilMidnight() {
		setInterval(() => {
			const brazilianTime = dayjs().tz('America/Sao_Paulo').format('HH:mm');
			if (brazilianTime === '00:00') {
				newWord();
				console.log('Meia noite! Palavra trocada!');
			}
		}, 60_000);
	},
};