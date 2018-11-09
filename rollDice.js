var _ = require('lodash');


exports.roll = (max = 6) => {
    return _.random(0, max);
}

