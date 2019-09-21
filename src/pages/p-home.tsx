import React, { ExoticComponent, memo } from 'react';

/* Containers */

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
        {/* <DashboardContainer /> */}
    </div>
));

export default Homepage;
