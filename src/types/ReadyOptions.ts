import { SetOptional } from 'type-fest';

import Options from './Options';

/**
 * Vue Dev Server's options that's ready to use.
 */
type ReadyOptions = SetOptional<Required<Options>, 'alias' | 'define'>;

export default ReadyOptions;
