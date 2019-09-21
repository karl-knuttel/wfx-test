import debounce from 'lodash.debounce';
import React, { ExoticComponent, memo } from 'react';
import { withRouter } from 'react-router-dom';

/* Utils */
import { parseDate } from '../../../../shared/scripts/utilities';

/* Styles */
import './single-post.scss';

/**
 * Interface
 */
interface SinglePostProps {
    context?: string;
    modifiers?: string;
    entity?: SinglePostEntity;
    exitView: () => void;
}

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

export const SinglePost: ExoticComponent<SinglePostProps> = memo(props => {
    const { context, modifiers, entity, exitView } = props;

    const SinglePostClasses = `c-single-post c-single-post--${
        context ? context : 'default'
    } ${modifiers ? modifiers : ''}`;

    return (
        <article className={SinglePostClasses}>
            {entity && (
                <>
                    <header className="single-post__header">
                        <button
                            className="single-post__close-button"
                            onClick={exitView}
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
                            <h3>{entity.title}</h3>
                            <h5>
                                {entity.created_at !== entity.updated_at
                                    ? `Last updated ${parseDate(
                                          entity.updated_at
                                      )}`
                                    : `Created on ${parseDate(
                                          entity.created_at
                                      )}`}
                            </h5>
                            <p>{entity.content}</p>
                            <button
                                className="single-post__edit-button"
                                onClick={() => console.log('editing')}
                            >
                                Edit information
                            </button>
                        </div>
                    </div>
                </>
            )}
        </article>
    );
});

export default SinglePost;
