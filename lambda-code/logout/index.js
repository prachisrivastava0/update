exports.handler = async (event) => {
 
    const response = {
        statusCode: 200,
        body: JSON.stringify('User logged out successfully!'),
    };
    return response;
};
