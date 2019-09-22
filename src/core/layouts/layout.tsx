import * as React from 'react';

/* Styles */
import './layout.scss';

interface LayoutProps {
    readonly appTitle?: string;
    readonly children?: any;
}

/**
 * General Layout
 */
const Layout = (props: LayoutProps) => {
    const { appTitle, children } = props;
    return (
        <>
            <header className="r-header">
                <div className="header__title-container">{appTitle}</div>
            </header>
            <main className="r-main">
                <div>{children}</div>
            </main>
        </>
    );
};

export default Layout;
