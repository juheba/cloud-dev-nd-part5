import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      stream: {
        type: 'dynamodb',
        arn: { "Fn::GetAtt" : [ "ImagesTable", "StreamArn" ] }  // GetAtt function from CloudFormation.
      }
    }
  ]
};
