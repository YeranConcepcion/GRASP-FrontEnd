export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000/api',  // Your development API URL
  cognitoConfig: {
    userPoolId: 'us-west-2_b55x8lSnp',
    clientId: '1g03nnedl1kt6mkhg4kqu9843r'
  },
  GETGASSTATIONS : "https://7x2f8ah9ef.execute-api.us-west-2.amazonaws.com/NP/getgasstations",
  UPDATEGASPRICE: "https://7x2f8ah9ef.execute-api.us-west-2.amazonaws.com/NP/updategasprice",
  GETCLOSESTGASSTATION: "https://7x2f8ah9ef.execute-api.us-west-2.amazonaws.com/NP/getcloseststation",
  GETADMINS: "https://7x2f8ah9ef.execute-api.us-west-2.amazonaws.com/NP/getadmins",
  UPDATERATINGS: "https://7x2f8ah9ef.execute-api.us-west-2.amazonaws.com/NP/stations/rating"
};
