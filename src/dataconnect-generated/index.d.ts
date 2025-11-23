import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddWatchEventData {
  watchEvent_insert: WatchEvent_Key;
}

export interface AddWatchEventVariables {
  movieId: UUIDString;
  userId: UUIDString;
  location?: string | null;
  watchDate: DateString;
}

export interface CreateMovieListData {
  movieList_insert: MovieList_Key;
}

export interface CreateMovieListVariables {
  name: string;
  description?: string | null;
  isPublic: boolean;
}

export interface GetMyReviewsData {
  reviews: ({
    id: UUIDString;
    rating: number;
    reviewText?: string | null;
    movie: {
      id: UUIDString;
      title: string;
    } & Movie_Key;
  } & Review_Key)[];
}

export interface GetPublicMovieListsData {
  movieLists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & MovieList_Key)[];
}

export interface MovieListEntry_Key {
  id: UUIDString;
  __typename?: 'MovieListEntry_Key';
}

export interface MovieList_Key {
  id: UUIDString;
  __typename?: 'MovieList_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface WatchEvent_Key {
  id: UUIDString;
  __typename?: 'WatchEvent_Key';
}

interface AddWatchEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddWatchEventVariables): MutationRef<AddWatchEventData, AddWatchEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddWatchEventVariables): MutationRef<AddWatchEventData, AddWatchEventVariables>;
  operationName: string;
}
export const addWatchEventRef: AddWatchEventRef;

export function addWatchEvent(vars: AddWatchEventVariables): MutationPromise<AddWatchEventData, AddWatchEventVariables>;
export function addWatchEvent(dc: DataConnect, vars: AddWatchEventVariables): MutationPromise<AddWatchEventData, AddWatchEventVariables>;

interface GetPublicMovieListsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicMovieListsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPublicMovieListsData, undefined>;
  operationName: string;
}
export const getPublicMovieListsRef: GetPublicMovieListsRef;

export function getPublicMovieLists(): QueryPromise<GetPublicMovieListsData, undefined>;
export function getPublicMovieLists(dc: DataConnect): QueryPromise<GetPublicMovieListsData, undefined>;

interface CreateMovieListRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovieListVariables): MutationRef<CreateMovieListData, CreateMovieListVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMovieListVariables): MutationRef<CreateMovieListData, CreateMovieListVariables>;
  operationName: string;
}
export const createMovieListRef: CreateMovieListRef;

export function createMovieList(vars: CreateMovieListVariables): MutationPromise<CreateMovieListData, CreateMovieListVariables>;
export function createMovieList(dc: DataConnect, vars: CreateMovieListVariables): MutationPromise<CreateMovieListData, CreateMovieListVariables>;

interface GetMyReviewsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyReviewsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyReviewsData, undefined>;
  operationName: string;
}
export const getMyReviewsRef: GetMyReviewsRef;

export function getMyReviews(): QueryPromise<GetMyReviewsData, undefined>;
export function getMyReviews(dc: DataConnect): QueryPromise<GetMyReviewsData, undefined>;

