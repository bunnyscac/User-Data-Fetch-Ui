import { alertConstants } from '../_constants';

//POSSIBLE ALERT STATUSES
export const alertActions = {
    success,
    error,
    clear
};

//FUNCTIONS FOR EACH STATUSES
function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}