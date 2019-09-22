import debounce from 'lodash.debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Store & more */
import store from '../../../../app.store';
import * as fromActions from '../../store/geography-posts.actions';
import * as fromData from '../../store/geography-posts.selectors';

/* Utils */
import { parseDate } from '../../../../shared/scripts/utilities';

/* Styles */
import './single-post.scss';

/**
 * Interface
 */
interface StateProps {
    readonly entity?: SinglePostEntity;
    readonly fetchStatus?: string;
    readonly selectedPostId?: string;
}

type Props = StateProps;

export interface SinglePostEntity {
    id: number;
    title: string;
    content: string;
    lat: string;
    long: string;
    image_url: string;
    created_at: string;
    updated_at: string;
}

function mapStateToProps(state: any): StateProps {
    return {
        entity: fromData.getCurrentPostEntity(state),
        fetchStatus: fromData.getCurrentPostFetchStatus(state),
        selectedPostId: fromData.getSelectedPostId(state)
    };
}

@(connect<StateProps, {}, {}>(mapStateToProps) as any)
class SinglePost extends Component<Props> {
    /**
     * State
     */
    public state = {
        editActive: false,
        entity: {} as SinglePostEntity
    };

    /*
     * Component Did Mount
     */
    public componentDidMount() {
        const { selectedPostId } = this.props;

        if (selectedPostId) {
            this.onGetData(selectedPostId);
        }
    }

    public componentDidUpdate(prevProps, prevState) {
        const { entity } = this.props;
        if (prevProps.entity !== entity) {
            this.setState({
                entity: this.props.entity
            });
        }
    }

    /**
     * Render
     */
    public render() {
        const { editActive, entity } = this.state;

        return (
            <div className="c-single-post">
                {entity && (
                    <>
                        <header className="single-post__header">
                            <button
                                className="btn btn-close single-post__close-button"
                                onClick={debounce(
                                    () => this.onCloseModal(),
                                    50
                                )}
                            >
                                &times;
                            </button>
                        </header>
                        <div className="single-post__body">
                            <div className="single-post__image-container">
                                <img
                                    className="single-post__image"
                                    src={entity.image_url}
                                    alt={`Picture of ${entity.title}`}
                                />
                            </div>
                            <div className="single-post__content">
                                <h3 className="single-post__title">
                                    {entity.title}
                                </h3>
                                <h5 className="single-post__detail">
                                    {entity.created_at !== entity.updated_at
                                        ? `Last updated ${parseDate(
                                              entity.updated_at
                                          )}`
                                        : `Created on ${parseDate(
                                              entity.created_at
                                          )}`}
                                </h5>
                                {editActive ? (
                                    <textarea
                                        className="single-post__description-edit"
                                        onChange={e =>
                                            this.onDescriptionChange(e)
                                        }
                                        defaultValue={entity.content}
                                    />
                                ) : (
                                    <p className="single-post__description">
                                        {entity.content}
                                    </p>
                                )}
                                {editActive ? (
                                    <>
                                        <button
                                            className="btn btn-primary"
                                            onClick={debounce(
                                                () => this.onUpdatePost(),
                                                50
                                            )}
                                            disabled={this.shouldDisableButton()}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="btn btn-cancel"
                                            onClick={debounce(
                                                () => this.onCancelEdit(),
                                                50
                                            )}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        onClick={debounce(
                                            () => this.onSetEditActive(true),
                                            50
                                        )}
                                    >
                                        Edit information
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    /*
     * Request a single post from the API
     */
    private onGetData = (postId: string) => {
        store.dispatch(
            fromActions.geographySinglePostFetch({
                postId
            })
        );
    };

    /*
     * Set editing active for single post
     */
    private onSetEditActive = (value: boolean) => {
        this.setState({
            editActive: value
        });
    };

    /*
     * Set editing active for single post
     */
    private onCancelEdit = () => {
        this.setState(
            {
                entity: this.props.entity
            },
            () => this.onSetEditActive(false)
        );
    };

    /*
     * Set editing active for single post
     */
    private onDescriptionChange = (e: any) => {
        this.setState({
            entity: {
                ...this.state.entity,
                content: e.target.value
            }
        });
    };

    /*
     * Update a single post
     */
    private onUpdatePost = () => {
        store.dispatch(
            fromActions.geographyPostUpdate({
                postId: this.props.selectedPostId,
                request: this.state.entity
            })
        );
    };

    /*
     * Should disable save button
     */
    private shouldDisableButton = () => {
        return this.state.entity.content === '' ? true : false;
    };

    /*
     * Close single post view
     */
    private onCloseModal = () => {
        store.dispatch(fromActions.geographyPostsSetModalActive(false));
    };
}

export default SinglePost;
