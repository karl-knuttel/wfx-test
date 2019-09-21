import * as coreActions from './core.actions';
import coreReducer from './core.reducer';
import * as fromCore from './core.selectors';
import CORE_INITIAL_STATE from './core.state';

export { CORE_INITIAL_STATE, coreReducer, coreActions, fromCore };
