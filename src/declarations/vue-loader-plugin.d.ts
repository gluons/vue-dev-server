declare module 'vue-loader/lib/plugin' {
	import { Compiler, Plugin } from 'webpack';

	export default class VueLoaderPlugin implements Plugin {
		apply(compiler: Compiler): void;
	}
}
