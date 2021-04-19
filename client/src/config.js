const config = {
  s3: {
    REGION: "us-west-2",
    BUCKET: "CBD-Store",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://vex6bltqnh.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ACjTTlJTW",
    APP_CLIENT_ID: "4aofljtff2k0lj9k7oh97lr73i",
    IDENTITY_POOL_ID: "us-west-2:20e61217-4a2e-44dc-828b-93868b416769",
  },
};

export default config;