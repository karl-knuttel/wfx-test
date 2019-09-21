import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Store & more */
import store from '../../../../app.store';
import * as fromActions from '../../store/geography-posts.actions';
import * as fromData from '../../store/geography-posts.selectors';

/* Components */
import MapComponent from '../../components/map-component/map-component';
import SinglePostComponent, {
    SinglePostEntity
} from '../../components/single-post/single-post';

/* Styles */
import './posts-container.scss';

/* Constants */
import { FETCH_STATUS } from '../../../../shared/scripts/constants';

/**
 * Interface
 */
interface StateProps {
    readonly entities?: SinglePostEntity[];
    readonly currentPostEntity?: SinglePostEntity;
    readonly fetchStatus?: string;
    readonly match?: any;
    readonly userToken?: string;
}

type Props = StateProps;

function mapStateToProps(state: any): StateProps {
    return {
        entities: fromData.getPostsEntities(state),
        fetchStatus: fromData.getPostsFetchStatus(state),
        currentPostEntity: fromData.getCurrentPostEntity(state)
    };
}

@(connect<StateProps, {}, {}>(mapStateToProps) as any)
class PostsContainer extends Component<Props> {
    /**
     * State
     */
    public state = {
        singlePostView: false
    };

    /**
     * Posts Request
     */
    private postsRequestPrivate: any;

    get postsRequest(): {} {
        return this.postsRequestPrivate;
    }

    set postsRequest(value) {
        this.postsRequestPrivate = value;
    }

    /**
     * Single Post Request
     */
    private singlePostRequestPrivate: any;

    get singlePostRequest(): string {
        return this.singlePostRequestPrivate;
    }

    set singlePostRequest(value) {
        this.singlePostRequestPrivate = value;
    }

    // /**
    //  * Post Create
    //  */
    // private postCreatePrivate: {};

    // get postCreate(): {} {
    //     return this.postCreatePrivate;
    // }

    // set postCreate(value) {
    //     this.postCreatePrivate = value;
    // }

    // /**
    //  * Post Update
    //  */
    // private postUpdatePrivate: {};

    // get postUpdate(): {} {
    //     return this.postUpdatePrivate;
    // }

    // set postUpdate(value) {
    //     this.postUpdatePrivate = value;
    // }

    // /**
    //  * Post Delete
    //  */
    // private postDeletePrivate: {};

    // get postDelete(): {} {
    //     return this.postDeletePrivate;
    // }

    // set postDelete(value) {
    //     this.postDeletePrivate = value;
    // }

    /*
     * Component Did Mount
     */
    public componentDidMount() {
        const { match } = this.props;

        this.onGetPostsData();
    }

    /*
     * Component Did Update
     */
    public componentDidUpdate(prevProps: any, prevState: any) {
        // const {
        // 	entities,
        // 	fetchStatus,
        // 	isLoadingUser,
        // 	match,
        // 	userToken = ''
        // } = this.props;
        // if (
        // 	isLoadingUser !== prevProps.isLoadingUser ||
        // 	match.params.caseId !== prevProps.match.params.caseId ||
        // 	!entities.length ||
        // 	fetchStatus === FETCH_STATUS.DELETED ||
        // 	fetchStatus === FETCH_STATUS.CREATED
        // ) {
        // 	this.onGetData(userToken, match.params.caseId);
        // }
        // if (
        // 	prevProps.fetchStatus !== fetchStatus &&
        // 	(fetchStatus === FETCH_STATUS.CREATED ||
        // 		fetchStatus === FETCH_STATUS.WAIVED)
        // ) {
        // 	this.setState({
        // 		isModalOpen: false
        // 	});
        // }
    }

    /*
     * Render method
     */
    public render() {
        const { entities, currentPostEntity } = this.props;
        const { singlePostView } = this.state;

        if (entities && !entities.length) {
            return <div>loading</div>;
        }

        console.log('entities: ', entities);

        return (
            <div className="c-posts-container">
                {singlePostView ? (
                    <SinglePostComponent
                        entity={currentPostEntity}
                        exitView={() =>
                            this.setState({
                                singlePostView: false
                            })
                        }
                    />
                ) : (
                    <MapComponent
                        mapData={this.onGenerateMapData(entities)}
                        onMarkerClick={this.onMarkerClick}
                    />
                )}
                <button onClick={debounce(() => this.onCreatePost(), 50)}>
                    Create
                </button>
                <button onClick={debounce(() => this.onUpdatePost('1'), 50)}>
                    Update
                </button>
                <button onClick={debounce(() => this.onDeletePost('1'), 50)}>
                    Delete
                </button>
            </div>
        );
    }

    /*
     * Request the data from the API
     */
    private onGetPostsData = () => {
        this.postsRequest = {};

        store.dispatch(fromActions.geographyPostsFetch({}));
    };

    /*
     * Create data for map component
     */
    private onGenerateMapData = (entities: any) => {
        const mapData: any[] = [];

        entities.forEach((entity: any) => {
            const mapItem: any = {};

            mapItem['name'] = entity.title;
            mapItem['coordinates'] = [entity.long, entity.lat];
            mapItem['markerOffset'] = 0;
            mapItem['id'] = entity.id.toString();

            mapData.push(mapItem);
        });

        return mapData;
    };

    /*
     * Handle when user clicks on map marker
     */
    private onMarkerClick = (id: string) => {
        console.log('Map item clicked: ', id);
        this.setState(
            {
                singlePostView: true
            },
            () => this.onGetSinglePost(id)
        );
    };

    /*
     * Request a single post from the API
     */
    private onGetSinglePost = (id: string) => {
        this.singlePostRequest = id;

        store.dispatch(
            fromActions.geographySinglePostFetch({
                postId: this.singlePostRequest
            })
        );
    };

    /*
     * Create a single post
     */
    private onCreatePost = () => {
        this.singlePostRequest = '';

        store.dispatch(
            fromActions.geographyPostCreate({
                request: {
                    title: 'Madrid',
                    content: 'blah blah',
                    lat: '40.41678',
                    long: '-3.70379',
                    image_url:
                        'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg'
                }
            })
        );
    };

    /*
     * Update a single post
     */
    private onUpdatePost = (id: string) => {
        this.singlePostRequest = id;

        store.dispatch(
            fromActions.geographyPostUpdate({
                postId: this.singlePostRequest,
                request: {
                    title: 'Madrid',
                    content: 'blah blah',
                    lat: '40.41678',
                    long: '-3.70379',
                    image_url:
                        'https://c2.staticflickr.com/2/1269/4670777817_d657cd9819_b.jpg'
                }
            })
        );
    };

    /*
     * Delete a single post
     */
    private onDeletePost = (id: string) => {
        this.singlePostRequest = id;

        store.dispatch(
            fromActions.geographyPostDelete({
                postId: this.singlePostRequest
            })
        );
    };
}

export default withRouter(PostsContainer as any);
