import moren, { PartialDefaults } from 'moren';
import webpack from 'webpack';
import WebpackDevServer, {
	Configuration as DevConfiguration
} from 'webpack-dev-server';

import Options from './types/Options';
import ReadyOptions from './types/ReadyOptions';
import createWebpackConfig from './lib/createWebpackConfig';

export const DefaultOptions: PartialDefaults<Options> = {
	define: {
		'process.env.NODE_ENV': 'development'
	},
	port: 8080,
	open: true,
	htmlTitle: 'Vue Dev Server',
	webpackBarName: 'Vue Dev Server'
};

export default async function serve(options: Options): Promise<void> {
	const finalOptions = moren(options, DefaultOptions) as ReadyOptions;
	const { port } = finalOptions;
	const webpackConfig = createWebpackConfig(finalOptions);
	const devConfig = webpackConfig.devServer as DevConfiguration;

	WebpackDevServer.addDevServerEntrypoints(webpackConfig, devConfig);

	const compiler = webpack(webpackConfig);
	const server = new WebpackDevServer(compiler, devConfig);

	await new Promise((resolve, reject) => {
		server.listen(port, '0.0.0.0', err => {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}
