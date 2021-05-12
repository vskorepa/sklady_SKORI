/* b4bff86c8fb340c624cda2e8ee9759146e92316d
 * This file is automatically generated by graphql-let. */

import * as __SchemaTypes__ from '../node_modules/@types/graphql-let/__generated__/__SCHEMA__';
import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    AddSingleRow: Row;
    deleteSingleRow: Row;
    editCount: Row;
};
export declare type MutationAddSingleRowArgs = {
    id: Scalars['Int'];
    name: Scalars['String'];
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    count: Scalars['Int'];
};
export declare type MutationDeleteSingleRowArgs = {
    id: Scalars['Int'];
};
export declare type MutationEditCountArgs = {
    id: Scalars['Int'];
    count: Scalars['Int'];
};
export declare type Query = {
    __typename?: 'Query';
    singleRow: Row;
    multipleRows: Array<Row>;
};
export declare type QuerySingleRowArgs = {
    id: Scalars['Int'];
};
export declare type Row = {
    __typename?: 'Row';
    id: Scalars['Int'];
    name: Scalars['String'];
    code: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    count: Scalars['Int'];
};
export declare type MultipleRowsQueryVariables = __SchemaTypes__.Exact<{
    [key: string]: never;
}>;
export declare type MultipleRowsQuery = ({
    __typename?: 'Query';
} & {
    multipleRows: Array<({
        __typename?: 'Row';
    } & Pick<__SchemaTypes__.Row, 'name' | 'id' | 'code' | 'count'>)>;
});
export declare const MultipleRowsDocument: Apollo.DocumentNode;
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
 *   },
 * });
 */
export declare function useMultipleRowsQuery(baseOptions?: Apollo.QueryHookOptions<MultipleRowsQuery, MultipleRowsQueryVariables>): Apollo.QueryResult<MultipleRowsQuery, any>;
export declare function useMultipleRowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MultipleRowsQuery, MultipleRowsQueryVariables>): Apollo.QueryTuple<MultipleRowsQuery, any>;
export declare type MultipleRowsQueryHookResult = ReturnType<typeof useMultipleRowsQuery>;
export declare type MultipleRowsLazyQueryHookResult = ReturnType<typeof useMultipleRowsLazyQuery>;
export declare type MultipleRowsQueryResult = Apollo.QueryResult<MultipleRowsQuery, MultipleRowsQueryVariables>;