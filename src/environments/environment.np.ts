export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',  // Your development API URL
  cognitoConfig: {
    userPoolId: 'us-west-2_UR2oBa8bZ',
    clientId: '1hh20kasovioaq9mrsqo5fibui'
  },
  GETGASSTATIONS : "https://tlvsiwvpgb.execute-api.us-west-2.amazonaws.com/NP/getgasstations",
  UPDATEGASPRICE: "https://tlvsiwvpgb.execute-api.us-west-2.amazonaws.com/NP/updategasprice",
  GETCLOSESTGASSTATION: "https://tlvsiwvpgb.execute-api.us-west-2.amazonaws.com/NP/getcloseststation"
};
