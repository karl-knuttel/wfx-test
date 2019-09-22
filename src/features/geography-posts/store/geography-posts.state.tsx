import { FETCH_STATUS } from '../../../shared/scripts/constants';

const GEOGRAPHY_POSTS_INITIAL_STATE: GeographyPostsState = {
    posts: {
        entities: [],
        error: {},
        fetchStatus: FETCH_STATUS.NONE
    },
    currentPost: {
        entity: {},
        error: {},
        fetchStatus: FETCH_STATUS.NONE
    },
    modalActive: false,
    selectedPostId: ''
};

interface GeographyPostsState {
    posts: Posts;
    currentPost: CurrentPost;
    modalActive: boolean;
    selectedPostId: string;
}

interface Posts extends ServerResponse {
    entities: [];
}

interface CurrentPost extends ServerResponse {
    entity: {};
}

interface ServerResponse {
    error: {};
    fetchStatus: string;
}

export default GEOGRAPHY_POSTS_INITIAL_STATE;
