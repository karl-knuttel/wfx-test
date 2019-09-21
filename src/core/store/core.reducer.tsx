import * as Actions from './core.actions';
import CORE_INITIAL_STATE from './core.state';

export default function coreReducer(state = CORE_INITIAL_STATE, action: any) {
    switch (action.type) {
        case Actions.CORE_SET_APP_TITLE:
            return handleCoreSetAppTitle(state, action.payload);
        default:
            return state;
    }
}

export function handleCoreSetAppTitle(state: any, payload: any) {
    return {
        ...state,
        appTitle: payload
    };
}
