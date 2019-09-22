/**
 * Geography Posts
 */
export const GEOGRAPHY_POSTS_FETCH = '@@wfx-test/geography-posts/fetch';
export const GEOGRAPHY_POSTS_FETCHED = '@@wfx-test/geography-posts/fetched';
export const GEOGRAPHY_POSTS_FETCH_FAILED =
    '@@wfx-test/geography-posts/fetch-failed';
export const GEOGRAPHY_SINGLE_POST_FETCH =
    '@@wfx-test/geography-post/single/fetch';
export const GEOGRAPHY_SINGLE_POST_FETCHED =
    '@@wfx-test/geography-post/single/fetched';
export const GEOGRAPHY_SINGLE_POST_FETCH_FAILED =
    '@@wfx-test/geography-post/single/fetch-failed';
export const GEOGRAPHY_POST_CREATE = '@@wfx-test/geography-post/create';
export const GEOGRAPHY_POST_CREATED = '@@wfx-test/geography-post/created';
export const GEOGRAPHY_POST_CREATE_FAILED =
    '@@wfx-test/geography-post/create-failed';
export const GEOGRAPHY_POST_UPDATE = '@@wfx-test/geography-post/update';
export const GEOGRAPHY_POST_UPDATED = '@@wfx-test/geography-post/updated';
export const GEOGRAPHY_POST_UPDATE_FAILED =
    '@@wfx-test/geography-post/update-failed';
export const GEOGRAPHY_POST_DELETE = '@@wfx-test/geography-post/delete';
export const GEOGRAPHY_POST_DELETED = '@@wfx-test/geography-post/deleted';
export const GEOGRAPHY_POST_DELETE_FAILED =
    '@@wfx-test/geography-post/delete-failed';
export const GEOGRAPHY_POST_SET_MODAL_ACTIVE_STATE =
    '@@wfx-test/geography-posts/set-modal-active-state';
export const GEOGRAPHY_POST_SET_SELECTED_POST_ID =
    '@@wfx-test/geography-posts/set-selected-post-id';

/**
 * Geography Posts
 */

/* Fetch */
export function geographyPostsFetch(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POSTS_FETCH
    };
}

export function geographyPostsFetched(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POSTS_FETCHED
    };
}

export function geographyPostsFetchFailed(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POSTS_FETCH_FAILED
    };
}

export function geographySinglePostFetch(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_SINGLE_POST_FETCH
    };
}

export function geographySinglePostFetched(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_SINGLE_POST_FETCHED
    };
}

export function geographySinglePostFetchFailed(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_SINGLE_POST_FETCH_FAILED
    };
}

/* Create */
export function geographyPostCreate(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_CREATE
    };
}

export function geographyPostCreated(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_CREATED
    };
}

export function geographyPostCreateFailed(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_CREATE_FAILED
    };
}

/* Update */
export function geographyPostUpdate(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_UPDATE
    };
}

export function geographyPostUpdated(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_UPDATED
    };
}

export function geographyPostUpdateFailed(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_UPDATE_FAILED
    };
}

/* Delete */
export function geographyPostDelete(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_DELETE
    };
}

export function geographyPostDeleted(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_DELETED
    };
}

export function geographyPostDeleteFailed(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_DELETE_FAILED
    };
}

/* Modal */
export function geographyPostsSetModalActive(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_SET_MODAL_ACTIVE_STATE
    };
}

/* Selected Post Id */
export function geographyPostsSetSelectedPostId(payload: any) {
    return {
        payload,
        type: GEOGRAPHY_POST_SET_SELECTED_POST_ID
    };
}
