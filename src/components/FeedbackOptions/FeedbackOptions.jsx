import PropTypes from 'prop-types';

import { Button } from "components"

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {options.map(option =>
                <Button
                    key={option}
                    name={option}
                    onHandleClick={onLeaveFeedback}
                />
            )}
        </>    
    );
};

FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
}