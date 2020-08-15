import { cosmiconfig } from 'cosmiconfig';
import defaults from 'lodash.defaults';
import TypeScriptLoader from '@endemolshinegroup/cosmiconfig-typescript-loader';

import Options from '../types/Options';

export const CONFIG_NAME = 'vue-dev-server';

export default async function loadConfig(
	cliOptions?: Partial<Options>
): Promise<Options> {
	const explorer = cosmiconfig(CONFIG_NAME, {
		searchPlaces: [
			`${CONFIG_NAME}.config.js`,
			`${CONFIG_NAME}.config.json`,
			`${CONFIG_NAME}.config.yaml`,
			`${CONFIG_NAME}.config.yml`,
			`${CONFIG_NAME}.config.ts`
		],
		loaders: {
			'.ts': TypeScriptLoader
		}
	});

	const result = await explorer.search();

	if (!result || result.isEmpty) {
		const emptyOptions = {} as Options;

		return cliOptions ? (cliOptions as Options) : emptyOptions;
	}

	const options = result.config as Options;
	const mergedOptions: Options = defaults(options, cliOptions);

	return mergedOptions;
}
