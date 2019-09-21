import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import createRootReducer, { INITIAL_STATE } from './app.reducers';

/* Epics */
import GeographyPostsEpics from './features/geography-posts/store/geography-posts.epics';

const history = createBrowserHistory({});

/**
 * Declare the epic middleware
 * @type {EpicMiddleware}
 */
const epicMiddleware = createEpicMiddleware();

/**
 * Epics (Async handling with redux-observables and RxJS)
 */
export const ROOT_EPIC = combineEpics(
    GeographyPostsEpics.getGeographyPosts,
    GeographyPostsEpics.getGeographySinglePost,
    GeographyPostsEpics.createGeographyPost,
    GeographyPostsEpics.updateGeographyPost,
    GeographyPostsEpics.deleteGeographyPost
);

/**
 * Create the store
 */
const store = createStore(
    createRootReducer(history), // Combine all reduces, receive history for the router
    INITIAL_STATE,
    composeWithDevTools(
        applyMiddleware(epicMiddleware, routerMiddleware(history))
    )
);

/**
 * Inject the middleware epics
 */
epicMiddleware.run(ROOT_EPIC);

/**
 * Export store as singleton
 */
export default store;

/**
 * Export further objects like history
 */
export { history };
