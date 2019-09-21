import { connectRouter } from 'connected-react-router/immutable';
import { History } from 'history';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

/* Reducers */
import { coreReducer } from './core/store';
import { geographyPostsReducer } from './features/geography-posts/store';

/**
 * Declare the initial state
 */
export const INITIAL_STATE: object = Immutable.Map();

/**
 * Aggregate all reducers and populate the router history
 * @param history
 * @returns {any}
 */
export default (history: History) =>
    combineReducers({
        core: coreReducer,
        geographyPosts: geographyPostsReducer,
        router: connectRouter(history)
    });
