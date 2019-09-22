import debounce from 'lodash.debounce';
import React, { ExoticComponent, memo } from 'react';
import { withRouter } from 'react-router-dom';

/* Utils */
import { SinglePostEntity } from '../single-post/single-post';

/* Styles */
import './locations-table.scss';

/**
 * Interface
 */
interface LocationsTableProps {
    context?: string;
    modifiers?: string;
    deleteButtonClick: (postId: string) => void;
    entities?: SinglePostEntity[];
}

export const LocationsTable: ExoticComponent<LocationsTableProps> = memo(
    props => {
        const { context, modifiers, deleteButtonClick, entities } = props;

        const LocationsTableClasses = `c-locations-table c-locations-table--${
            context ? context : 'default'
        } ${modifiers ? modifiers : ''}`;

        return (
            <table className={LocationsTableClasses}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {entities &&
                        entities.map((entity, entityIndex) => (
                            <tr key={entityIndex}>
                                <td>{entity.title}</td>
                                <td>
                                    {entities.length > 1 && (
                                        <button
                                            className="btn btn-small btn-primary"
                                            onClick={debounce(
                                                () =>
                                                    deleteButtonClick(
                                                        entity.id.toString()
                                                    ),
                                                50
                                            )}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        );
    }
);

export default LocationsTable;
