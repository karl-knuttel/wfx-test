import * as React from 'react';

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
            <header className="r-header">{appTitle}</header>
            <main className="r-main">
                <div>{children}</div>
            </main>
        </>
    );
};

export default Layout;
