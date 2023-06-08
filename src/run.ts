import { handler } from ".";

handler(
    {
        resource: '/{proxy+}',
        path: '/users/login',
        httpMethod: 'POST',
        headers: {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'CloudFront-Forwarded-Proto': 'https',
            'CloudFront-Is-Desktop-Viewer': 'true',
            'CloudFront-Is-Mobile-Viewer': 'false',
            'CloudFront-Is-SmartTV-Viewer': 'false',
            'CloudFront-Is-Tablet-Viewer': 'false',
            'CloudFront-Viewer-ASN': '7303',
            'CloudFront-Viewer-Country': 'AR',
            'Content-Type': 'application/json',
            Host: 'xxj7cdmze1.execute-api.sa-east-1.amazonaws.com',
            'Postman-Token': 'c56068ad-96df-4368-8656-95f467c8d4c3',
            'User-Agent': 'PostmanRuntime/7.32.2',
            Via: '1.1 4b49f2c714263bc89790f36abfb326e2.cloudfront.net (CloudFront)',
            'X-Amz-Cf-Id': 'AyDE_Tpq49ezttSPnkCiXRZ06wbf2zRH4tQr-YjbOCABJzVHkjmPYA==',
            'X-Amzn-Trace-Id': 'Root=1-64806f19-5994db4b2636274b6f80f1a6',
            'X-Forwarded-For': '181.169.184.59, 130.176.220.106',
            'X-Forwarded-Port': '443',
            'X-Forwarded-Proto': 'https'
        },
        multiValueHeaders: {
            Accept: ['*/*'],
            'Accept-Encoding': ['gzip, deflate, br'],
            'CloudFront-Forwarded-Proto': ['https'],
            'CloudFront-Is-Desktop-Viewer': ['true'],
            'CloudFront-Is-Mobile-Viewer': ['false'],
            'CloudFront-Is-SmartTV-Viewer': ['false'],
            'CloudFront-Is-Tablet-Viewer': ['false'],
            'CloudFront-Viewer-ASN': ['7303'],
            'CloudFront-Viewer-Country': ['AR'],
            'Content-Type': ['application/json'],
            Host: ['xxj7cdmze1.execute-api.sa-east-1.amazonaws.com'],
            'Postman-Token': ['c56068ad-96df-4368-8656-95f467c8d4c3'],
            'User-Agent': ['PostmanRuntime/7.32.2'],
            Via: [
                '1.1 4b49f2c714263bc89790f36abfb326e2.cloudfront.net (CloudFront)'
            ],
            'X-Amz-Cf-Id': ['AyDE_Tpq49ezttSPnkCiXRZ06wbf2zRH4tQr-YjbOCABJzVHkjmPYA=='],
            'X-Amzn-Trace-Id': ['Root=1-64806f19-5994db4b2636274b6f80f1a6'],
            'X-Forwarded-For': ['181.169.184.59, 130.176.220.106'],
            'X-Forwarded-Port': ['443'],
            'X-Forwarded-Proto': ['https']
        },
        queryStringParameters: null,
        multiValueQueryStringParameters: null,
        pathParameters: { proxy: 'users/login' },
        stageVariables: null,
        requestContext: {
            authorizer: null,
            resourceId: 'asfant',
            resourcePath: '/{proxy+}',
            httpMethod: 'POST',
            extendedRequestId: 'GJZL_E8tmjQFQBQ=',
            requestTime: '07/Jun/2023:11:50:49 +0000',
            path: '/dev/users/login',
            accountId: '485917634060',
            protocol: 'HTTP/1.1',
            stage: 'dev',
            domainPrefix: 'xxj7cdmze1',
            requestTimeEpoch: 1686138649248,
            requestId: '17f615d3-a826-4ff3-9efd-ffeb7e2051c4',
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
                apiKey: "random",
                apiKeyId: "random",
                clientCert: null
            },
            domainName: 'xxj7cdmze1.execute-api.sa-east-1.amazonaws.com',
            apiId: 'xxj7cdmze1'
        },
        body: '{\n    "username": "test",\n    "password": "test"\n}',
        isBase64Encoded: false
    }
).then(console.log);