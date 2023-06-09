import { handler } from ".";

handler(
    {
        resource: '/{proxy+}',
        path: '/items',
        httpMethod: 'GET',
        headers: {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            Host: 'n3l28rmwdb.execute-api.sa-east-1.amazonaws.com',
            'Postman-Token': '8faed5f4-4057-4944-ae29-291779f6edd5',
            'User-Agent': 'PostmanRuntime/7.32.2',
            'X-Amzn-Trace-Id': 'Root=1-6481d031-209ebf6c337ec31a35f9e87d',
            'X-Forwarded-For': '181.169.184.59',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https',
            token: 'random-token'
        },
        multiValueHeaders: {
            Accept: ['*/*'],
            'Accept-Encoding': ['gzip, deflate, br'],
            Host: ['n3l28rmwdb.execute-api.sa-east-1.amazonaws.com'],
            'Postman-Token': ['8faed5f4-4057-4944-ae29-291779f6edd5'],
            'User-Agent': ['PostmanRuntime/7.32.2'],
            'X-Amzn-Trace-Id': ['Root=1-6481d031-209ebf6c337ec31a35f9e87d'],
            'X-Forwarded-For': ['181.169.184.59'],
            'X-Forwarded-Port': ['443'],
            'X-Forwarded-Proto': ['https']
        },
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        pathParameters: { proxy: 'items' },
        stageVariables: null,
        requestContext: {
            resourceId: '3427ld',
            resourcePath: '/{proxy+}',
            httpMethod: 'GET',
            extendedRequestId: 'GM13zHQ3mjQESxA=',
            requestTime: '08/Jun/2023:12:57:21 +0000',
            path: '/dev/items',
            accountId: '485917634060',
            protocol: 'HTTP/1.1',
            stage: 'dev',
            domainPrefix: 'n3l28rmwdb',
            requestTimeEpoch: 1686229041600,
            requestId: '9b390d2b-c180-4cd5-914a-ed6b2692cb2e',
            identity: {
                cognitoIdentityPoolId: null,
                accountId: null,
                cognitoIdentityId: null,
                caller: null,
                sourceIp: '181.169.184.59',
                principalOrgId: null,
                accessKey: null,
                cognitoAuthenticationType: null,
                cognitoAuthenticationProvider: null,
                userArn: null,
                userAgent: 'PostmanRuntime/7.32.2',
                user: null,
                apiKey: null,
                apiKeyId: null,
                clientCert: null
            },
            domainName: 'n3l28rmwdb.execute-api.sa-east-1.amazonaws.com',
            apiId: 'n3l28rmwdb',
            authorizer: null
        },
        body: null,
        isBase64Encoded: false
    }
).then(console.log);