import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { dirname, join, resolve } from 'path';
import terminalLink from 'terminal-link';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import {
	Configuration,
	DefinePlugin,
	HotModuleReplacementPlugin
} from 'webpack';
import WebpackBar from 'webpackbar';

import ReadyOptions from '../types/ReadyOptions';

import stringifyDefine from './stringifyDefine';
import getCSSUses from './getCSSUses';

export default function createWebpackConfig(
	options: ReadyOptions
): Configuration {
	const { entry, alias, define, port, htmlTitle, webpackBarName } = options;

	const vuePath = dirname(require.resolve('vue'));
	const builtInAlias: Record<string, string> = {
		'@': resolve(process.cwd(), './src')
	};
	const finalAlias: Record<string, string> = {
		...builtInAlias,
		...alias
	};
	const stringifiedDefine = stringifyDefine(define);

	const serverUrl = `http://localhost:${port}`;
	const serverLink = terminalLink(serverUrl, serverUrl, {
		fallback: () => serverUrl
	});

	const config: Configuration = {
		mode: 'development',
		entry,
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					options: {
						hotReload: true,
						productionMode: false
					}
				},
				{
					test: /\.ts$/,
					loader: 'ts-loader',
					options: {
						compilerOptions: {
							sourceMap: true
						},
						appendTsSuffixTo: [/\.vue$/]
					}
				},
				{
					test: /\.css$/,
					use: getCSSUses()
				},
				{
					test: /\.scss$/,
					use: [
						...getCSSUses(2),
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.pug$/,
					oneOf: [
						{
							resourceQuery: /^\?vue/,
							loader: 'pug-plain-loader'
						},
						{
							loader: 'pug-loader'
						}
					]
				}
			]
		},
		resolve: {
			alias: {
				vue$: join(vuePath, 'vue.esm.js'),
				...finalAlias
			},
			extensions: ['.wasm', '.mjs', '.vue', '.ts', '.js', '.json']
		},
		plugins: [
			...(stringifiedDefine ? [new DefinePlugin(stringifiedDefine)] : []),
			new HotModuleReplacementPlugin(),
			new WebpackBar({
				name: webpackBarName
			}),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						`You development server is running on ${serverLink}`
					],
					notes: []
				}
			}),
			new VueLoaderPlugin(),
			new HtmlWebpackPlugin({
				title: htmlTitle,
				template: resolve(__dirname, '../../index.pug')
			})
		],
		devtool: 'eval-source-map',
		stats: false,
		devServer: {
			host: '0.0.0.0',
			port,
			hot: true,
			inline: true,
			open: false,
			noInfo: true
		}
	};

	return config;
}
