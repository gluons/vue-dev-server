import autoprefixer from 'autoprefixer';
import { RuleSetUseItem } from 'webpack';

/**
 * Get webpack rules' CSS `use`.
 *
 * @param {number} [importLoaders=1] `css-loader`'s `importLoaders`
 */
export default function getCSSUses(importLoaders = 1): RuleSetUseItem[] {
	const cssUses: RuleSetUseItem[] = [
		'vue-style-loader',
		{
			loader: 'css-loader',
			options: {
				importLoaders,
				sourceMap: true
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				plugins: [
					autoprefixer({
						overrideBrowserslist: [
							'extends browserslist-config-vue'
						]
					})
				],
				sourceMap: true
			}
		}
	];

	return cssUses;
}
