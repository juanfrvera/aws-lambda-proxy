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
            'Postman-Token': '457b2314-74e1-4d11-aceb-989c56b4c7dc',
            token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTY4Nzc4ODA3MH0.7NHbT07aQJJRyLiWWkzp4femor-U-4N-3enlV0iCl3M',
            'User-Agent': 'PostmanRuntime/7.32.3',
            'X-Amzn-Trace-Id': 'Root=1-649982a8-2cf203a31bd36c3b236583f7',
            'X-Forwarded-For': '181.169.184.59',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https'
        },
        multiValueHeaders: {
            Accept: ['*/*'],
            'Accept-Encoding': ['gzip, deflate, br'],
            Host: ['n3l28rmwdb.execute-api.sa-east-1.amazonaws.com'],
            'Postman-Token': ['457b2314-74e1-4d11-aceb-989c56b4c7dc'],
            token: [
                'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImV4cCI6MTY4Nzc4ODA3MH0.7NHbT07aQJJRyLiWWkzp4femor-U-4N-3enlV0iCl3M'
            ],
            'User-Agent': ['PostmanRuntime/7.32.3'],
            'X-Amzn-Trace-Id': ['Root=1-649982a8-2cf203a31bd36c3b236583f7'],
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
            extendedRequestId: 'HIFaZFgWGjQEKSA=',
            requestTime: '26/Jun/2023:12:20:56 +0000',
            path: '/dev/items',
            accountId: '485917634060',
            protocol: 'HTTP/1.1',
            stage: 'dev',
            domainPrefix: 'n3l28rmwdb',
            requestTimeEpoch: 1687782056608,
            requestId: '6b42b890-76c3-41c4-993c-4efda2db624b',
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
                userAgent: 'PostmanRuntime/7.32.3',
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