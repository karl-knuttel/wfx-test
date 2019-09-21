import React, { ExoticComponent, memo } from 'react';

/* Containers */
import PostsContainer from '../features/geography-posts/containers/posts-container/posts-container';

/**
 * Interface
 */
interface HomepageProps {
    readonly context?: string;
    readonly modifiers?: string;
}

export const Homepage: ExoticComponent<HomepageProps> = memo(props => (
    <div className="p-home">
        Home page route!
        <PostsContainer />
    </div>
));

export default Homepage;
