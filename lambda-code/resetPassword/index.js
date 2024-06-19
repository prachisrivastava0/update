exports.handler = async (event) => {
   
    const response = {
        statusCode: 200,
        body: JSON.stringify('Password reset successfully!'),
    };
    return response;
};