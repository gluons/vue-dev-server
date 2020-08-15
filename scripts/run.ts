import { resolve } from 'path';

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

		console.log('Server start.');
	} catch (err) {
		console.error(err);
	}
})();
