/* 7d6bcf82407b76f553f0d55ed620a43887ec305f
 * This file is automatically generated by graphql-let. */

import * as Types from '../__types__';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type MultipleRowsQueryVariables = Types.Exact<{
  storage: Types.Scalars['String'];
}>;


export type MultipleRowsQuery = (
  { __typename?: 'Query' }
  & { multipleRows: Array<(
    { __typename?: 'Row' }
    & Pick<Types.Row, 'name' | 'id' | 'code' | 'count' | 'description'>
  )> }
);


export const MultipleRowsDocument = gql`
    query MultipleRows($storage: String!) {
  multipleRows(storage: $storage) {
    name
    id
    code
    count
    description
  }
}
    `;

/**
 * __useMultipleRowsQuery__
 *
 * To run a query within a React component, call `useMultipleRowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMultipleRowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMultipleRowsQuery({
 *   variables: {
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useMultipleRowsQuery(baseOptions: Apollo.QueryHookOptions<MultipleRowsQuery, MultipleRowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MultipleRowsQuery, MultipleRowsQueryVariables>(MultipleRowsDocument, options);
      }
export function useMultipleRowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MultipleRowsQuery, MultipleRowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MultipleRowsQuery, MultipleRowsQueryVariables>(MultipleRowsDocument, options);
        }
export type MultipleRowsQueryHookResult = ReturnType<typeof useMultipleRowsQuery>;
export type MultipleRowsLazyQueryHookResult = ReturnType<typeof useMultipleRowsLazyQuery>;
export type MultipleRowsQueryResult = Apollo.QueryResult<MultipleRowsQuery, MultipleRowsQueryVariables>;