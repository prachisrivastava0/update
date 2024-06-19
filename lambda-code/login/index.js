exports.handler = async (event) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify('User logged in successfully!'),
    };
    return response;
};