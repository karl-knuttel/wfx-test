import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

/**
 * Store specific files
 */
import service from '../services/geography-posts.service';
import * as Actions from './geography-posts.actions';

/**
 * Customer Epics class.
 */
export default class GeographyPostsEpics {
    public static getGeographyPosts = (actions$: any) =>
        actions$.pipe(
            ofType(Actions.GEOGRAPHY_POSTS_FETCH),
            switchMap(({ payload }) => service.getGeographyPosts(payload)),
            map(response => Actions.geographyPostsFetched(response)),
            catchError((error: any) =>
                of(Actions.geographyPostsFetchFailed(error))
            )
        );

    public static getGeographySinglePost = (actions$: any) =>
        actions$.pipe(
            ofType(Actions.GEOGRAPHY_SINGLE_POST_FETCH),
            switchMap(({ payload }) => service.getGeographySinglePost(payload)),
            map(response => Actions.geographySinglePostFetched(response)),
            catchError((error: any) =>
                of(Actions.geographySinglePostFetchFailed(error))
            )
        );

    public static createGeographyPost = (actions$: any) =>
        actions$.pipe(
            ofType(Actions.GEOGRAPHY_POST_CREATE),
            switchMap(({ payload }) => service.createGeographyPost(payload)),
            map(response => Actions.geographyPostCreated(response)),
            catchError((error: any) =>
                of(Actions.geographyPostCreateFailed(error))
            )
        );

    public static updateGeographyPost = (actions$: any) =>
        actions$.pipe(
            ofType(Actions.GEOGRAPHY_POST_UPDATE),
            switchMap(({ payload }) => service.updateGeographyPost(payload)),
            map(response => Actions.geographyPostUpdated(response)),
            catchError((error: any) =>
                of(Actions.geographyPostUpdateFailed(error))
            )
        );

    public static deleteGeographyPost = (actions$: any) =>
        actions$.pipe(
            ofType(Actions.GEOGRAPHY_POST_DELETE),
            switchMap(({ payload }) => service.deleteGeographyPost(payload)),
            map(response => Actions.geographyPostDeleted(response)),
            catchError((error: any) =>
                of(Actions.geographyPostDeleteFailed(error))
            )
        );
}
