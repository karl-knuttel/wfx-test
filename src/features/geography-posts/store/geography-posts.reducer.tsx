import { FETCH_STATUS } from '../../../shared/scripts/constants';
import * as Actions from './geography-posts.actions';
import GEOGRAPHY_POSTS_INITIAL_STATE from './geography-posts.state';

export default function geographyPostsReducer(
    state: any = GEOGRAPHY_POSTS_INITIAL_STATE,
    action: any
) {
    switch (action.type) {
        case Actions.GEOGRAPHY_POSTS_FETCH:
            return handleGeographyPostsFetch(state);

        case Actions.GEOGRAPHY_POSTS_FETCHED:
            return handleGeographyPostsFetched(state, action.payload);

        case Actions.GEOGRAPHY_POSTS_FETCH_FAILED:
            return handleGeographyPostsFetchFailed(state, action.payload);

        case Actions.GEOGRAPHY_SINGLE_POST_FETCH:
            return handleGeographySinglePostFetch(state);

        case Actions.GEOGRAPHY_SINGLE_POST_FETCHED:
            return handleGeographySinglePostFetched(state, action.payload);

        case Actions.GEOGRAPHY_SINGLE_POST_FETCH_FAILED:
            return handleGeographySinglePostFetchFailed(state, action.payload);

        case Actions.GEOGRAPHY_POST_CREATE:
            return handleGeographyPostCreate(state);

        case Actions.GEOGRAPHY_POST_CREATED:
            return handleGeographyPostCreated(state, action.payload);

        case Actions.GEOGRAPHY_POST_CREATE_FAILED:
            return handleGeographyPostCreateFailed(state, action.payload);

        case Actions.GEOGRAPHY_POST_UPDATE:
            return handleGeographyPostUpdate(state);

        case Actions.GEOGRAPHY_POST_UPDATED:
            return handleGeographyPostUpdated(state, action.payload);

        case Actions.GEOGRAPHY_POST_UPDATE_FAILED:
            return handleGeographyPostUpdateFailed(state, action.payload);

        case Actions.GEOGRAPHY_POST_DELETE:
            return handleGeographyPostDelete(state);

        case Actions.GEOGRAPHY_POST_DELETED:
            return handleGeographyPostDeleted(state, action.payload);

        case Actions.GEOGRAPHY_POST_DELETE_FAILED:
            return handleGeographyPostDeleteFailed(state, action.payload);

        default:
            return state;
    }
}

/**
 *  posts
 */
function handleGeographyPostsFetch(state: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: {},
            fetchStatus: FETCH_STATUS.FETCHING
        }
    };
}

function handleGeographyPostsFetched(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            entities: payload.body,
            error: {},
            fetchStatus: FETCH_STATUS.FETCHED
        }
    };
}

function handleGeographyPostsFetchFailed(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: payload,
            fetchStatus: FETCH_STATUS.FETCH_FAILED
        }
    };
}

function handleGeographySinglePostFetch(state: any) {
    return {
        ...state,
        currentPost: {
            ...state.currentPost,
            error: {},
            fetchStatus: FETCH_STATUS.FETCHING
        }
    };
}

function handleGeographySinglePostFetched(state: any, payload: any) {
    return {
        ...state,
        currentPost: {
            ...state.currentPost,
            entity: payload.body,
            error: {},
            fetchStatus: FETCH_STATUS.FETCHED
        }
    };
}

function handleGeographySinglePostFetchFailed(state: any, payload: any) {
    return {
        ...state,
        currentPost: {
            ...state.currentPost,
            error: payload,
            fetchStatus: FETCH_STATUS.FETCH_FAILED
        }
    };
}

function handleGeographyPostCreate(state: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: {},
            fetchStatus: FETCH_STATUS.CREATING
        }
    };
}

function handleGeographyPostCreated(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            entities: payload.body,
            error: {},
            fetchStatus: FETCH_STATUS.CREATED
        }
    };
}

function handleGeographyPostCreateFailed(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: payload,
            fetchStatus: FETCH_STATUS.CREATE_FAILED
        }
    };
}

function handleGeographyPostUpdate(state: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: {},
            fetchStatus: FETCH_STATUS.UPDATING
        }
    };
}

function handleGeographyPostUpdated(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            entities: payload.body,
            error: {},
            fetchStatus: FETCH_STATUS.UPDATED
        }
    };
}

function handleGeographyPostUpdateFailed(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: payload,
            fetchStatus: FETCH_STATUS.UPDATE_FAILED
        }
    };
}

function handleGeographyPostDelete(state: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: {},
            fetchStatus: FETCH_STATUS.DELETING
        }
    };
}

function handleGeographyPostDeleted(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            entities: payload.body,
            error: {},
            fetchStatus: FETCH_STATUS.DELETED
        }
    };
}

function handleGeographyPostDeleteFailed(state: any, payload: any) {
    return {
        ...state,
        posts: {
            ...state.posts,
            error: payload,
            fetchStatus: FETCH_STATUS.DELETE_FAILED
        }
    };
}
