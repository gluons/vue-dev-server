import { DefinePlugin } from 'webpack';

type CodeValueObject = DefinePlugin.CodeValueObject;

/**
 * Stringify `define` object.
 *
 * @export
 * @param {(Record<string, unknown> | undefined)} define `define` object.
 * @returns {(Record<string, CodeValueObject> | null)}
 */
export default function stringifyDefine(
	define: Record<string, unknown> | undefined
): Record<string, CodeValueObject> | null {
	if (
		typeof define !== 'object' ||
		define == null ||
		Object.keys(define).length === 0
	) {
		return null;
	}

	const stringifiedDefine: Record<string, CodeValueObject> = {};

	for (const key in define) {
		const value = define[key];

		stringifiedDefine[key] = JSON.stringify(value);
	}

	return stringifiedDefine;
}
