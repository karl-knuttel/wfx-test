import debounce from 'lodash.debounce';
import React, { ExoticComponent, memo } from 'react';

/* Utils */
import { SinglePostEntity } from '../single-post/single-post';

/* Styles */
import './city-adder.scss';

/**
 * Interface
 */
interface CityAdderProps {
    context?: string;
    modifiers?: string;
    onTagClick: (title: string) => void;
    cityEntities?: any[];
}

export const CityAdder: ExoticComponent<CityAdderProps> = memo(props => {
    const { context, modifiers, onTagClick, cityEntities } = props;

    const CityAdderClasses = `c-city-adder c-city-adder--${
        context ? context : 'default'
    } ${modifiers ? modifiers : ''}`;

    return (
        <div className={CityAdderClasses}>
            <div className="city-adder__title">
                <h4>Add a city to the map</h4>
            </div>
            {cityEntities &&
                cityEntities.map((city, cityIndex) => (
                    <div
                        key={cityIndex}
                        className="city-adder__tag"
                        onClick={debounce(() => onTagClick(city), 50)}
                    >
                        {city.title}
                    </div>
                ))}
        </div>
    );
});

export default CityAdder;
