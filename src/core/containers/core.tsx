import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderRoutes, RouteConfig } from 'react-router-config';
import Layout from '../layouts/layout';

/* Store and more */
import * as fromData from '../store/core.selectors';

/**
 * Interface
 */
interface CoreProps {
    route: {
        routes: RouteConfig[];
    };
}

interface StateProps {
    readonly appTitle?: string;
}

type Props = CoreProps & StateProps;

function mapStateToProps(state: any): StateProps {
    return {
        appTitle: fromData.getCoreAppTitle(state)
    };
}

@(connect<StateProps, {}, {}>(mapStateToProps) as any)
class AppCore extends Component<Props> {
    public routes = this.props.route.routes;

    public render() {
        const { appTitle } = this.props;

        return (
            <div className="page-wrapper">
                <Layout appTitle={appTitle}>{renderRoutes(this.routes)}</Layout>
            </div>
        );
    }
}

export default AppCore;
