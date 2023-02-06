import PropTypes from 'prop-types';

import { toTitle } from "utilities/toTitle";

export const StatisticsComponent = ({title, value}) => (
    <p>{toTitle(title)}: {value}</p>
)

StatisticsComponent.propTypes = {
        title: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
}