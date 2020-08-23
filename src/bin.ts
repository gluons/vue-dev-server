#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */

import consola from 'consola';
import yargs from 'yargs';

import Options from './types/Options';
import loadConfig from './lib/loadConfig';
import serve from './';

const argv = yargs
	.wrap(Math.max(80, yargs.terminalWidth() - 20))
	.recommendCommands()
	.help()
	.version()
	.alias('help', 'h')
	.alias('version', 'v')
	.command('* [entry]', 'Start Vue Dev Server', builder =>
		builder.positional('entry', {
			type: 'string',
			describe: 'Path to entry file',
			normalize: true
		})
	)
	.option('open', {
		type: 'boolean',
		alias: 'o',
		default: true,
		desc: 'Open webpage in browser when server start'
	})
	.option('clipboard', {
		type: 'boolean',
		alias: 'c',
		desc: 'Copy dev server URL to clipboard.',
		default: false
	}).argv;

const cliOptions: Options = {
	entry: argv.entry as string,
	open: argv.open,
	clipboard: argv.clipboard
};

(async function () {
	try {
		const options = await loadConfig(cliOptions);

		await serve(options);
	} catch (err) {
		consola.error(err);
	}
})();
