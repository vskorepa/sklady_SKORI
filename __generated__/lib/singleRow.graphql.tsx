/* b3723379d8e02eddb6ea4210fdf1ad0c82771664
 * This file is automatically generated by graphql-let. */

import * as __SchemaTypes__ from '../node_modules/@types/graphql-let/__generated__/__SCHEMA__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddSingleRow: Row;
  deleteSingleRow: Row;
  editCount: Row;
};


export type MutationAddSingleRowArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
  storage: Scalars['String'];
};


export type MutationDeleteSingleRowArgs = {
  id: Scalars['Int'];
  storage: Scalars['String'];
};


export type MutationEditCountArgs = {
  id: Scalars['Int'];
  count: Scalars['Int'];
  storage: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  singleRow: Row;
  multipleRows: Array<Row>;
};


export type QuerySingleRowArgs = {
  id: Scalars['Int'];
};


export type QueryMultipleRowsArgs = {
  storage: Scalars['String'];
};

export type Row = {
  __typename?: 'Row';
  id: Scalars['Int'];
  name: Scalars['String'];
  code: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  count: Scalars['Int'];
};

export type SingleRowQueryVariables = __SchemaTypes__.Exact<{
  id: __SchemaTypes__.Scalars['Int'];
}>;


export type SingleRowQuery = (
  { __typename?: 'Query' }
  & { singleRow: (
    { __typename?: 'Row' }
    & Pick<__SchemaTypes__.Row, 'id' | 'name' | 'code' | 'count' | 'description'>
  ) }
);

export type AddSingleRowMutationVariables = __SchemaTypes__.Exact<{
  id: __SchemaTypes__.Scalars['Int'];
  name: __SchemaTypes__.Scalars['String'];
  code: __SchemaTypes__.Scalars['String'];
  description?: __SchemaTypes__.Maybe<__SchemaTypes__.Scalars['String']>;
  count: __SchemaTypes__.Scalars['Int'];
  storage: __SchemaTypes__.Scalars['String'];
}>;


export type AddSingleRowMutation = (
  { __typename?: 'Mutation' }
  & { AddSingleRow: (
    { __typename?: 'Row' }
    & Pick<__SchemaTypes__.Row, 'id' | 'name' | 'code' | 'count' | 'description'>
  ) }
);

export type DeleteSingleRowMutationVariables = __SchemaTypes__.Exact<{
  id: __SchemaTypes__.Scalars['Int'];
  storage: __SchemaTypes__.Scalars['String'];
}>;


export type DeleteSingleRowMutation = (
  { __typename?: 'Mutation' }
  & { deleteSingleRow: (
    { __typename?: 'Row' }
    & Pick<__SchemaTypes__.Row, 'id'>
  ) }
);

export type EditCountMutationVariables = __SchemaTypes__.Exact<{
  id: __SchemaTypes__.Scalars['Int'];
  count: __SchemaTypes__.Scalars['Int'];
  storage: __SchemaTypes__.Scalars['String'];
}>;


export type EditCountMutation = (
  { __typename?: 'Mutation' }
  & { editCount: (
    { __typename?: 'Row' }
    & Pick<__SchemaTypes__.Row, 'id' | 'count'>
  ) }
);


export const SingleRowDocument = gql`
    query SingleRow($id: Int!) {
  singleRow(id: $id) {
    id
    name
    code
    count
    description
  }
}
    `;

/**
 * __useSingleRowQuery__
 *
 * To run a query within a React component, call `useSingleRowQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleRowQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleRowQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleRowQuery(baseOptions: Apollo.QueryHookOptions<SingleRowQuery, SingleRowQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleRowQuery, SingleRowQueryVariables>(SingleRowDocument, options);
      }
export function useSingleRowLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleRowQuery, SingleRowQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleRowQuery, SingleRowQueryVariables>(SingleRowDocument, options);
        }
export type SingleRowQueryHookResult = ReturnType<typeof useSingleRowQuery>;
export type SingleRowLazyQueryHookResult = ReturnType<typeof useSingleRowLazyQuery>;
export type SingleRowQueryResult = Apollo.QueryResult<SingleRowQuery, SingleRowQueryVariables>;
export const AddSingleRowDocument = gql`
    mutation AddSingleRow($id: Int!, $name: String!, $code: String!, $description: String, $count: Int!, $storage: String!) {
  AddSingleRow(
    id: $id
    name: $name
    code: $code
    description: $description
    count: $count
    storage: $storage
  ) {
    id
    name
    code
    count
    description
  }
}
    `;
export type AddSingleRowMutationFn = Apollo.MutationFunction<AddSingleRowMutation, AddSingleRowMutationVariables>;

/**
 * __useAddSingleRowMutation__
 *
 * To run a mutation, you first call `useAddSingleRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSingleRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSingleRowMutation, { data, loading, error }] = useAddSingleRowMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      code: // value for 'code'
 *      description: // value for 'description'
 *      count: // value for 'count'
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useAddSingleRowMutation(baseOptions?: Apollo.MutationHookOptions<AddSingleRowMutation, AddSingleRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSingleRowMutation, AddSingleRowMutationVariables>(AddSingleRowDocument, options);
      }
export type AddSingleRowMutationHookResult = ReturnType<typeof useAddSingleRowMutation>;
export type AddSingleRowMutationResult = Apollo.MutationResult<AddSingleRowMutation>;
export type AddSingleRowMutationOptions = Apollo.BaseMutationOptions<AddSingleRowMutation, AddSingleRowMutationVariables>;
export const DeleteSingleRowDocument = gql`
    mutation DeleteSingleRow($id: Int!, $storage: String!) {
  deleteSingleRow(id: $id, storage: $storage) {
    id
  }
}
    `;
export type DeleteSingleRowMutationFn = Apollo.MutationFunction<DeleteSingleRowMutation, DeleteSingleRowMutationVariables>;

/**
 * __useDeleteSingleRowMutation__
 *
 * To run a mutation, you first call `useDeleteSingleRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSingleRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSingleRowMutation, { data, loading, error }] = useDeleteSingleRowMutation({
 *   variables: {
 *      id: // value for 'id'
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useDeleteSingleRowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSingleRowMutation, DeleteSingleRowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSingleRowMutation, DeleteSingleRowMutationVariables>(DeleteSingleRowDocument, options);
      }
export type DeleteSingleRowMutationHookResult = ReturnType<typeof useDeleteSingleRowMutation>;
export type DeleteSingleRowMutationResult = Apollo.MutationResult<DeleteSingleRowMutation>;
export type DeleteSingleRowMutationOptions = Apollo.BaseMutationOptions<DeleteSingleRowMutation, DeleteSingleRowMutationVariables>;
export const EditCountDocument = gql`
    mutation editCount($id: Int!, $count: Int!, $storage: String!) {
  editCount(id: $id, count: $count, storage: $storage) {
    id
    count
  }
}
    `;
export type EditCountMutationFn = Apollo.MutationFunction<EditCountMutation, EditCountMutationVariables>;

/**
 * __useEditCountMutation__
 *
 * To run a mutation, you first call `useEditCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCountMutation, { data, loading, error }] = useEditCountMutation({
 *   variables: {
 *      id: // value for 'id'
 *      count: // value for 'count'
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useEditCountMutation(baseOptions?: Apollo.MutationHookOptions<EditCountMutation, EditCountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCountMutation, EditCountMutationVariables>(EditCountDocument, options);
      }
export type EditCountMutationHookResult = ReturnType<typeof useEditCountMutation>;
export type EditCountMutationResult = Apollo.MutationResult<EditCountMutation>;
export type EditCountMutationOptions = Apollo.BaseMutationOptions<EditCountMutation, EditCountMutationVariables>;