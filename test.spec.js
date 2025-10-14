const { S3 } = require("@aws-sdk/client-s3");
const { DynamoDB } = require("@aws-sdk/client-dynamodb");

jest.mock("@aws-sdk/client-dynamodb");

test("make a real request with the AWS SDK S3 client", async () => {
  const s3 = new S3({
    region: "us-west-2",
  });

  const listBuckets = await s3.listBuckets();
  expect(listBuckets.$metadata.httpStatusCode).toEqual(200);
});

test("mocking a subset of the S3 client", async () => {
  const s3 = new S3({
    region: "us-west-2",
  });

  jest.spyOn(s3, "listBuckets").mockImplementationOnce(() =>
    Promise.resolve({
      $metadata: {
        httpStatusCode: 403,
      },
    }),
  );

  const listBuckets = await s3.listBuckets();
  expect(listBuckets.$metadata.httpStatusCode).toEqual(403);
});

test("mocking the AWS SDK DynamoDB client", async () => {
  const ddb = new DynamoDB({
    region: "us-west-2",
  });

  expect(ddb.listTables()).toEqual(undefined);
  expect(ddb.listTables).toHaveBeenCalled();
});
