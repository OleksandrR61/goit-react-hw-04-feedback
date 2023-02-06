import PropTypes from 'prop-types';

import { toTitle } from "utilities/toTitle";

export const Button = ({name, onHandleClick}) => (
    <button
        type="button"
        name={name}
        onClick={onHandleClick}
    >
        {toTitle(name)}
    </button>
)

Button.propTypes = {
        name: PropTypes.string.isRequired,
        onHandleClick: PropTypes.func.isRequired,
}