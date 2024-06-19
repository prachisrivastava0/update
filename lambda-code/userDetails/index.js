exports.handler = async (event) => {
  
    const response = {
        statusCode: 200,
        body: JSON.stringify('User details fetched successfully!'),
    };
    return response;
};
