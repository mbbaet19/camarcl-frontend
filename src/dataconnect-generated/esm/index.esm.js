import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'camarcl-frontend',
  location: 'us-east4'
};

export const addWatchEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddWatchEvent', inputVars);
}
addWatchEventRef.operationName = 'AddWatchEvent';

export function addWatchEvent(dcOrVars, vars) {
  return executeMutation(addWatchEventRef(dcOrVars, vars));
}

export const getPublicMovieListsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPublicMovieLists');
}
getPublicMovieListsRef.operationName = 'GetPublicMovieLists';

export function getPublicMovieLists(dc) {
  return executeQuery(getPublicMovieListsRef(dc));
}

export const createMovieListRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMovieList', inputVars);
}
createMovieListRef.operationName = 'CreateMovieList';

export function createMovieList(dcOrVars, vars) {
  return executeMutation(createMovieListRef(dcOrVars, vars));
}

export const getMyReviewsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMyReviews');
}
getMyReviewsRef.operationName = 'GetMyReviews';

export function getMyReviews(dc) {
  return executeQuery(getMyReviewsRef(dc));
}

