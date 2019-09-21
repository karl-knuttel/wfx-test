import { createSelector } from 'reselect';

/**
 * Return whole state object.
 *
 * @param state {Object} - Current store state.
 */
export const getGeographyPosts = (state: any) => state.get('geographyPosts');

/**
 * Return entities by using `createSelector`.
 *
 * @param {Function} - Selector function which gets the whole slice of the state object.
 * @param {Function} - Returns entities state by using a simple arrow function.
 *
 * @return {Object}
 */

/*
 * Posts
 */
export const getPosts = createSelector(
    getGeographyPosts,
    geographyPosts => geographyPosts.posts
);

export const getPostsEntities = createSelector(
    getPosts,
    posts => posts.entities
);

export const getPostsError = createSelector(
    getPosts,
    posts => posts.error
);

export const getPostsFetchStatus = createSelector(
    getPosts,
    posts => posts.fetchStatus
);

/*
 * Current Post
 */
export const getCurrentPost = createSelector(
    getGeographyPosts,
    geographyPosts => geographyPosts.currentPost
);

export const getCurrentPostEntity = createSelector(
    getCurrentPost,
    currentPost => currentPost.entity
);

export const getCurrentPostError = createSelector(
    getCurrentPost,
    currentPost => currentPost.error
);

export const getCurrentPostFetchStatus = createSelector(
    getCurrentPost,
    currentPost => currentPost.fetchStatus
);
