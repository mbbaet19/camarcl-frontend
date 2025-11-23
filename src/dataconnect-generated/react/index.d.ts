import { AddWatchEventData, AddWatchEventVariables, GetPublicMovieListsData, CreateMovieListData, CreateMovieListVariables, GetMyReviewsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useAddWatchEvent(options?: useDataConnectMutationOptions<AddWatchEventData, FirebaseError, AddWatchEventVariables>): UseDataConnectMutationResult<AddWatchEventData, AddWatchEventVariables>;
export function useAddWatchEvent(dc: DataConnect, options?: useDataConnectMutationOptions<AddWatchEventData, FirebaseError, AddWatchEventVariables>): UseDataConnectMutationResult<AddWatchEventData, AddWatchEventVariables>;

export function useGetPublicMovieLists(options?: useDataConnectQueryOptions<GetPublicMovieListsData>): UseDataConnectQueryResult<GetPublicMovieListsData, undefined>;
export function useGetPublicMovieLists(dc: DataConnect, options?: useDataConnectQueryOptions<GetPublicMovieListsData>): UseDataConnectQueryResult<GetPublicMovieListsData, undefined>;

export function useCreateMovieList(options?: useDataConnectMutationOptions<CreateMovieListData, FirebaseError, CreateMovieListVariables>): UseDataConnectMutationResult<CreateMovieListData, CreateMovieListVariables>;
export function useCreateMovieList(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMovieListData, FirebaseError, CreateMovieListVariables>): UseDataConnectMutationResult<CreateMovieListData, CreateMovieListVariables>;

export function useGetMyReviews(options?: useDataConnectQueryOptions<GetMyReviewsData>): UseDataConnectQueryResult<GetMyReviewsData, undefined>;
export function useGetMyReviews(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyReviewsData>): UseDataConnectQueryResult<GetMyReviewsData, undefined>;
