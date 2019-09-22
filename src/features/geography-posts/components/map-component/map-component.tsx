import debounce from 'lodash.debounce';
import React, { ExoticComponent, memo } from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker
} from 'react-simple-maps';

/* Styles */
import './map-component.scss';

/**
 * Interface
 */
interface MapComponentProps {
    context?: string;
    modifiers?: string;
    mapData?: any[];
    onMarkerClick: (id: string) => void;
}

export const MapComponent: ExoticComponent<MapComponentProps> = memo(props => {
    const { context, modifiers, mapData, onMarkerClick } = props;

    const MapComponentClasses = `c-map-component c-map-component--${
        context ? context : 'default'
    } ${modifiers ? modifiers : ''}`;

    const include = [
        'DEU',
        'FRA',
        'ESP',
        'PRT',
        'ITA',
        'GRC',
        'GBR',
        'IRL',
        'NLD',
        'BEL',
        'PGL',
        'BGR',
        'AUT',
        'ALB',
        'CHE',
        'SWE',
        'SVK',
        'SVN',
        'LTU',
        'GIB',
        'LIE',
        'CZE',
        'ALB',
        'AND',
        'ARM',
        'AZE',
        'BLR',
        'HRV',
        'CYP',
        'DNK',
        'EST',
        'FIN',
        'GEO',
        'HUN',
        'LVA',
        'LUX',
        'MLT',
        'MDA',
        'MCO',
        'MNE',
        'NOR',
        'POL',
        'ROU',
        'SMR',
        'SRB',
        'SWE',
        'UKR',
        'BIH',
        'MKD',
        'UNK'
    ];

    return (
        <div className={MapComponentClasses}>
            <ComposableMap
                projectionConfig={{ scale: 1400 }}
                width={980}
                height={720}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            >
                <ZoomableGroup center={[12, 49]} disablePanning>
                    <Geographies geography="/static/world-50m.json">
                        {(geographies, projection) =>
                            geographies.map(
                                (geography: any, geographyIndex) =>
                                    include.indexOf(geography.id) !== -1 && (
                                        <Geography
                                            key={geographyIndex}
                                            geography={geography}
                                            projection={projection}
                                            style={{
                                                default: {
                                                    fill: '#ECEFF1',
                                                    stroke: '#607D8B',
                                                    strokeWidth: 0.75,
                                                    outline: 'none'
                                                },
                                                hover: {
                                                    fill: '#CFD8DC',
                                                    stroke: '#607D8B',
                                                    strokeWidth: 0.75,
                                                    outline: 'none'
                                                },
                                                pressed: {
                                                    fill: '#FF5722',
                                                    stroke: '#607D8B',
                                                    strokeWidth: 0.75,
                                                    outline: 'none'
                                                }
                                            }}
                                        />
                                    )
                            )
                        }
                    </Geographies>
                    <Markers>
                        {mapData &&
                            mapData.map((item, itemIndex) => (
                                <Marker
                                    key={itemIndex}
                                    marker={item}
                                    style={{
                                        default: { fill: '#FF5722' },
                                        hover: { fill: '#FFFFFF' },
                                        pressed: { fill: '#FF5722' }
                                    }}
                                    onClick={debounce(
                                        () => onMarkerClick(item.id),
                                        50
                                    )}
                                >
                                    <circle
                                        cx={0}
                                        cy={0}
                                        r={10}
                                        style={{
                                            stroke: '#FF5722',
                                            strokeWidth: 3,
                                            opacity: 0.9
                                        }}
                                    />
                                    <text
                                        textAnchor="middle"
                                        y={item.markerOffset}
                                        style={{
                                            fontFamily: 'Roboto, sans-serif',
                                            fill: '#607D8B'
                                        }}
                                    >
                                        {item.name}
                                    </text>
                                </Marker>
                            ))}
                    </Markers>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
});

export default MapComponent;
