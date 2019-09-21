import { createSelector } from 'reselect';

/**
 * Return whole state object.
 *
 * @param state {Object} - Current store state.
 */
export const getCore = (state: any) => state.get('core');

/*
 * SIDEBAR
 */
export const getCoreAppTitle = createSelector(
    getCore,
    core => core.appTitle
);
