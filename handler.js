const { monday } = require('./build/index');

module.exports.hello = (event, context, callback) => {
    monday();

    const response = {
        statusCode: 200,
    };

    callback(null, response);
};
