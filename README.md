### Testing using Jest and the AWS SDK for JavaScript v3

Problem: https://github.com/aws/aws-sdk-js-v3/issues/7420

> When using the latest @aws-sdk/client-s3 with jest, the following error occurs.

```
TypeError: A dynamic import callback was invoked without 
    --experimental-vm-modules
```

#### Option 1: add `@smithy` and `@aws-sdk` scope to `jest.config.transformIgnorePatterns`

See `package.json` script `test`, `jest.config.js` and `babel.config.js`.

```shell
npm test
```

#### Option 2: use jest's experimental vm modules support

See `package.json` script `test-evm`.

```shell
npm run test-evm
```

