import { resolve } from 'path';
import consola from 'consola';

import serve from '../dist';

(async function () {
	try {
		await serve({
			entry: resolve(__dirname, '../fixture/index.ts'),
			define: {
				TEXT1: 'Hello, World!'
			},
			port: 8888,
			open: false
		});

		consola.success('Server start.');
	} catch (err) {
		consola.error(err);
	}
})();
