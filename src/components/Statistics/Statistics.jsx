import PropTypes from 'prop-types';

// import { Notification } from "../Notification/Notification";
import { StatisticsComponent, Notification } from "components";

export const Statistics = ({option, total, positivePercentage}) => {
    return total
    ? <>
        {Object.keys(option).map(value =>
            <StatisticsComponent key={value} title={value} value={option[value]} />
        )}
        
        <StatisticsComponent title="total" value={total} />
        <StatisticsComponent title="positive feedback" value={positivePercentage} />
    </>
    : <Notification message="There is no feedback" />;
}

Statistics.propTypes = {
        option: PropTypes.object.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.string.isRequired,
}