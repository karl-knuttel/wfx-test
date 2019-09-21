import AppCore from './core';
import HomePage from './pages/p-home';

/**
 * Home page route.
 */
const Home = [
    {
        component: HomePage,
        exact: true,
        path: '/'
    }
];

/**
 * Bring all routes together
 */
export default [
    {
        component: AppCore as any,
        routes: ([] as any[]).concat(Home)
    }
];
