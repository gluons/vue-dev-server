/**
 * Vue Dev Server's options.
 *
 * @export
 * @interface Options
 */
export default interface Options {
	/**
	 * Path to entry file.
	 *
	 * @type {string}
	 * @memberof Options
	 */
	entry: string;
	/**
	 * Path aliases.
	 *
	 * @type {Record<string, string>}
	 * @memberof Options
	 */
	alias?: Record<string, string>;
	/**
	 * Define global constants which can be configured at compile time.
	 *
	 * @type {Record<string, unknown>}
	 * @default { 'process.env.NODE_ENV': 'development' }
	 * @memberof Options
	 */
	define?: Record<string, unknown>;
	/**
	 * Port of development server.
	 *
	 * @type {number}
	 * @default 8080
	 * @memberof Options
	 */
	port?: number;
	/**
	 * Open webpage in browser when server start.
	 *
	 * @type {boolean}
	 * @default true
	 * @memberof Options
	 */
	open?: boolean;
	/**
	 * Copy dev server URL to clipboard.
	 *
	 * @type {boolean}
	 * @default false
	 * @memberof Options
	 */
	clipboard?: boolean;
	/**
	 * Title of development webpage.
	 *
	 * @type {string}
	 * @default 'Vue Dev Server'
	 * @memberof Options
	 */
	htmlTitle?: string;
	/**
	 * Name of WebpackBar's progress bar.
	 *
	 * @type {string}
	 * @default 'Vue Dev Server'
	 * @memberof Options
	 */
	webpackBarName?: string;
}
