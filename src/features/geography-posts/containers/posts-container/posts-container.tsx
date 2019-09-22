import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* Store & more */
import store from '../../../../app.store';
import * as fromActions from '../../store/geography-posts.actions';
import * as fromData from '../../store/geography-posts.selectors';

/* Components */
import CityAdder from '../../components/city-adder/city-adder';
import LocationsTable from '../../components/locations-table/locations-table';
import MapComponent from '../../components/map-component/map-component';
import SinglePostComponent, {
    SinglePostEntity
} from '../../components/single-post/single-post';

/* Constants */
import { FETCH_STATUS } from '../../../../shared/scripts/constants';

/* Utilities */
import { defaultCities } from '../../../../shared/scripts/cities';

/* Styles */
import './posts-container.scss';

/**
 * Interface
 */
interface StateProps {
    readonly entities?: SinglePostEntity[];
    readonly fetchStatus?: string;
    readonly modalActive?: boolean;
}

type Props = StateProps;

function mapStateToProps(state: any): StateProps {
    return {
        entities: fromData.getPostsEntities(state),
        fetchStatus: fromData.getPostsFetchStatus(state),
        modalActive: fromData.getModalActive(state)
    };
}

@(connect<StateProps, {}, {}>(mapStateToProps) as any)
class PostsContainer extends Component<Props> {
    /*
     * Component Did Mount
     */
    public componentDidMount() {
        this.onGetPostsData();
    }

    /*
     * Component Did Update
     */
    public componentDidUpdate(prevProps: any, prevState: any) {
        const { entities, fetchStatus } = this.props;
        if (
            fetchStatus !== prevProps.fetchStatus &&
            (fetchStatus === FETCH_STATUS.CREATED ||
                fetchStatus === FETCH_STATUS.DELETED ||
                fetchStatus === FETCH_STATUS.UPDATED)
        ) {
            this.onGetPostsData();
        }
    }

    /*
     * Render method
     */
    public render() {
        const { entities, modalActive } = this.props;

        if (entities && !entities.length) {
            return <div>loading</div>;
        }

        // console.log('entities: ', entities);

        return (
            <div className="c-posts-container">
                <div className="posts-container__left-content">
                    <LocationsTable
                        entities={entities && entities}
                        deleteButtonClick={this.onDeletePost}
                    />
                    <div className="posts-container__introduction">
                        <h5>
                            Click on a city in the map for further information
                        </h5>
                    </div>
                    <CityAdder
                        cityEntities={
                            entities &&
                            !!entities.length &&
                            this.onGenerateCityData(entities, defaultCities)
                        }
                        onTagClick={this.onAddCity}
                    />
                </div>
                <div className="posts-container__right-content">
                    <MapComponent
                        mapData={entities && this.onGenerateMapData(entities)}
                        onMarkerClick={this.onMarkerClick}
                    />
                </div>
                {modalActive && (
                    <div className="posts-container__pop-up">
                        <div
                            className="posts-container__pop-up-bg"
                            onClick={debounce(() => this.onCloseModal(), 50)}
                        />
                        <SinglePostComponent />
                    </div>
                )}
            </div>
        );
    }

    /*
     * Request the data from the API
     */
    private onGetPostsData = () => {
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
     * Create data for city adder component
     */
    private onGenerateCityData = (entities: any, defaultCities: any) => {
        const toRemove = [] as any[];

        defaultCities.map((city: any) => {
            entities.forEach((entity: any) => {
                if (entity.title === city.title) {
                    toRemove.push(city);
                }
            });
        });

        const filteredCities = defaultCities.filter(
            (city: any) => toRemove.indexOf(city) === -1
        );

        return filteredCities;
    };

    /*
     * Handle when user clicks on map marker
     */
    private onMarkerClick = (id: string) => {
        store.dispatch(fromActions.geographyPostsSetSelectedPostId(id));
        store.dispatch(fromActions.geographyPostsSetModalActive(true));
    };

    /*
     * Create a single post
     */
    private onCreatePost = (entity: any) => {
        store.dispatch(
            fromActions.geographyPostCreate({
                request: entity
            })
        );
    };

    /*
     * Delete a single post
     */
    private onDeletePost = (postId: string) => {
        store.dispatch(
            fromActions.geographyPostDelete({
                postId
            })
        );
    };

    /*
     * Add a city to the table and map
     */
    private onAddCity = (city: string) => {
        this.onCreatePost(city);
    };

    /*
     * Close single post view
     */
    private onCloseModal = () => {
        store.dispatch(fromActions.geographyPostsSetModalActive(false));
    };
}

export default withRouter(PostsContainer as any);
