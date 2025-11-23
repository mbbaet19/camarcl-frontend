# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetPublicMovieLists*](#getpublicmovielists)
  - [*GetMyReviews*](#getmyreviews)
- [**Mutations**](#mutations)
  - [*AddWatchEvent*](#addwatchevent)
  - [*CreateMovieList*](#createmovielist)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetPublicMovieLists
You can execute the `GetPublicMovieLists` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPublicMovieLists(): QueryPromise<GetPublicMovieListsData, undefined>;

interface GetPublicMovieListsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPublicMovieListsData, undefined>;
}
export const getPublicMovieListsRef: GetPublicMovieListsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPublicMovieLists(dc: DataConnect): QueryPromise<GetPublicMovieListsData, undefined>;

interface GetPublicMovieListsRef {
  ...
  (dc: DataConnect): QueryRef<GetPublicMovieListsData, undefined>;
}
export const getPublicMovieListsRef: GetPublicMovieListsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPublicMovieListsRef:
```typescript
const name = getPublicMovieListsRef.operationName;
console.log(name);
```

### Variables
The `GetPublicMovieLists` query has no variables.
### Return Type
Recall that executing the `GetPublicMovieLists` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPublicMovieListsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPublicMovieListsData {
  movieLists: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & MovieList_Key)[];
}
```
### Using `GetPublicMovieLists`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPublicMovieLists } from '@dataconnect/generated';


// Call the `getPublicMovieLists()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPublicMovieLists();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPublicMovieLists(dataConnect);

console.log(data.movieLists);

// Or, you can use the `Promise` API.
getPublicMovieLists().then((response) => {
  const data = response.data;
  console.log(data.movieLists);
});
```

### Using `GetPublicMovieLists`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPublicMovieListsRef } from '@dataconnect/generated';


// Call the `getPublicMovieListsRef()` function to get a reference to the query.
const ref = getPublicMovieListsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPublicMovieListsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.movieLists);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.movieLists);
});
```

## GetMyReviews
You can execute the `GetMyReviews` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMyReviews(): QueryPromise<GetMyReviewsData, undefined>;

interface GetMyReviewsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyReviewsData, undefined>;
}
export const getMyReviewsRef: GetMyReviewsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMyReviews(dc: DataConnect): QueryPromise<GetMyReviewsData, undefined>;

interface GetMyReviewsRef {
  ...
  (dc: DataConnect): QueryRef<GetMyReviewsData, undefined>;
}
export const getMyReviewsRef: GetMyReviewsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMyReviewsRef:
```typescript
const name = getMyReviewsRef.operationName;
console.log(name);
```

### Variables
The `GetMyReviews` query has no variables.
### Return Type
Recall that executing the `GetMyReviews` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMyReviewsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetMyReviews`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMyReviews } from '@dataconnect/generated';


// Call the `getMyReviews()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMyReviews();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMyReviews(dataConnect);

console.log(data.reviews);

// Or, you can use the `Promise` API.
getMyReviews().then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

### Using `GetMyReviews`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMyReviewsRef } from '@dataconnect/generated';


// Call the `getMyReviewsRef()` function to get a reference to the query.
const ref = getMyReviewsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMyReviewsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.reviews);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.reviews);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddWatchEvent
You can execute the `AddWatchEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addWatchEvent(vars: AddWatchEventVariables): MutationPromise<AddWatchEventData, AddWatchEventVariables>;

interface AddWatchEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddWatchEventVariables): MutationRef<AddWatchEventData, AddWatchEventVariables>;
}
export const addWatchEventRef: AddWatchEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addWatchEvent(dc: DataConnect, vars: AddWatchEventVariables): MutationPromise<AddWatchEventData, AddWatchEventVariables>;

interface AddWatchEventRef {
  ...
  (dc: DataConnect, vars: AddWatchEventVariables): MutationRef<AddWatchEventData, AddWatchEventVariables>;
}
export const addWatchEventRef: AddWatchEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addWatchEventRef:
```typescript
const name = addWatchEventRef.operationName;
console.log(name);
```

### Variables
The `AddWatchEvent` mutation requires an argument of type `AddWatchEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddWatchEventVariables {
  movieId: UUIDString;
  userId: UUIDString;
  location?: string | null;
  watchDate: DateString;
}
```
### Return Type
Recall that executing the `AddWatchEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddWatchEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddWatchEventData {
  watchEvent_insert: WatchEvent_Key;
}
```
### Using `AddWatchEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addWatchEvent, AddWatchEventVariables } from '@dataconnect/generated';

// The `AddWatchEvent` mutation requires an argument of type `AddWatchEventVariables`:
const addWatchEventVars: AddWatchEventVariables = {
  movieId: ..., 
  userId: ..., 
  location: ..., // optional
  watchDate: ..., 
};

// Call the `addWatchEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addWatchEvent(addWatchEventVars);
// Variables can be defined inline as well.
const { data } = await addWatchEvent({ movieId: ..., userId: ..., location: ..., watchDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addWatchEvent(dataConnect, addWatchEventVars);

console.log(data.watchEvent_insert);

// Or, you can use the `Promise` API.
addWatchEvent(addWatchEventVars).then((response) => {
  const data = response.data;
  console.log(data.watchEvent_insert);
});
```

### Using `AddWatchEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addWatchEventRef, AddWatchEventVariables } from '@dataconnect/generated';

// The `AddWatchEvent` mutation requires an argument of type `AddWatchEventVariables`:
const addWatchEventVars: AddWatchEventVariables = {
  movieId: ..., 
  userId: ..., 
  location: ..., // optional
  watchDate: ..., 
};

// Call the `addWatchEventRef()` function to get a reference to the mutation.
const ref = addWatchEventRef(addWatchEventVars);
// Variables can be defined inline as well.
const ref = addWatchEventRef({ movieId: ..., userId: ..., location: ..., watchDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addWatchEventRef(dataConnect, addWatchEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.watchEvent_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.watchEvent_insert);
});
```

## CreateMovieList
You can execute the `CreateMovieList` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMovieList(vars: CreateMovieListVariables): MutationPromise<CreateMovieListData, CreateMovieListVariables>;

interface CreateMovieListRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovieListVariables): MutationRef<CreateMovieListData, CreateMovieListVariables>;
}
export const createMovieListRef: CreateMovieListRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMovieList(dc: DataConnect, vars: CreateMovieListVariables): MutationPromise<CreateMovieListData, CreateMovieListVariables>;

interface CreateMovieListRef {
  ...
  (dc: DataConnect, vars: CreateMovieListVariables): MutationRef<CreateMovieListData, CreateMovieListVariables>;
}
export const createMovieListRef: CreateMovieListRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMovieListRef:
```typescript
const name = createMovieListRef.operationName;
console.log(name);
```

### Variables
The `CreateMovieList` mutation requires an argument of type `CreateMovieListVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMovieListVariables {
  name: string;
  description?: string | null;
  isPublic: boolean;
}
```
### Return Type
Recall that executing the `CreateMovieList` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMovieListData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMovieListData {
  movieList_insert: MovieList_Key;
}
```
### Using `CreateMovieList`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMovieList, CreateMovieListVariables } from '@dataconnect/generated';

// The `CreateMovieList` mutation requires an argument of type `CreateMovieListVariables`:
const createMovieListVars: CreateMovieListVariables = {
  name: ..., 
  description: ..., // optional
  isPublic: ..., 
};

// Call the `createMovieList()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMovieList(createMovieListVars);
// Variables can be defined inline as well.
const { data } = await createMovieList({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMovieList(dataConnect, createMovieListVars);

console.log(data.movieList_insert);

// Or, you can use the `Promise` API.
createMovieList(createMovieListVars).then((response) => {
  const data = response.data;
  console.log(data.movieList_insert);
});
```

### Using `CreateMovieList`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMovieListRef, CreateMovieListVariables } from '@dataconnect/generated';

// The `CreateMovieList` mutation requires an argument of type `CreateMovieListVariables`:
const createMovieListVars: CreateMovieListVariables = {
  name: ..., 
  description: ..., // optional
  isPublic: ..., 
};

// Call the `createMovieListRef()` function to get a reference to the mutation.
const ref = createMovieListRef(createMovieListVars);
// Variables can be defined inline as well.
const ref = createMovieListRef({ name: ..., description: ..., isPublic: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMovieListRef(dataConnect, createMovieListVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.movieList_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.movieList_insert);
});
```

