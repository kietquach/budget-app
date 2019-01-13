const moment = require.requireActual("moment");

//force moment to create at a specific point and time if nothing is passed in
export default (timestamp = 0) => {
    return moment(timestamp);
}