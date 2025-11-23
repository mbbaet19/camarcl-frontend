const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'camarcl-frontend',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const addWatchEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddWatchEvent', inputVars);
}
addWatchEventRef.operationName = 'AddWatchEvent';
exports.addWatchEventRef = addWatchEventRef;

exports.addWatchEvent = function addWatchEvent(dcOrVars, vars) {
  return executeMutation(addWatchEventRef(dcOrVars, vars));
};

const getPublicMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicMovieLists');
}
getPublicMovieListsRef.operationName = 'GetPublicMovieLists';
exports.getPublicMovieListsRef = getPublicMovieListsRef;

exports.getPublicMovieLists = function getPublicMovieLists(dc) {
  return executeQuery(getPublicMovieListsRef(dc));
};

const createMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovieList', inputVars);
}
createMovieListRef.operationName = 'CreateMovieList';
exports.createMovieListRef = createMovieListRef;

exports.createMovieList = function createMovieList(dcOrVars, vars) {
  return executeMutation(createMovieListRef(dcOrVars, vars));
};

const getMyReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyReviews');
}
getMyReviewsRef.operationName = 'GetMyReviews';
exports.getMyReviewsRef = getMyReviewsRef;

exports.getMyReviews = function getMyReviews(dc) {
  return executeQuery(getMyReviewsRef(dc));
};
