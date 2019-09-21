export const CORE_SET_APP_TITLE = '@@wfx-test/core/app/set-title';

export function coreSetTitle(payload: any) {
    return {
        payload,
        type: CORE_SET_APP_TITLE
    };
}
