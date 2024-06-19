// index.js for UploadLambda
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
    const params = {
        Bucket: process.env.S3/bucket2212,
        Key: 'file.txt', 
        Body: 'Hello, world!' 
    };
    
    try {
        await s3.upload(params).promise();
        const sns = new AWS.SNS();
        await sns.publish({
            Message: 'File uploaded successfully!',
            TopicArn: process.env.SnsTopicArn
        }).promise();
        return { statusCode: 200, body: 'File uploaded successfully!' };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: 'Error uploading file' };
    }
};


const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    const record = event.Records[0];
    const key = record.Sns.Message;

    const params = {
        TableName: process.env.DynamoDBTable,
        Item: {
            fileId: key,
            content: 'Example content' 
        }
    };

    try {
        await dynamoDB.put(params).promise();
        return { statusCode: 200, body: 'File processed and saved to DynamoDB!' };
    } catch (err) {
        console.error(err);
        return { statusCode: 500, body: 'Error processing file' };
    }
};
