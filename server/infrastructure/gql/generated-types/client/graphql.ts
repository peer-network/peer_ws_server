/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Decimal: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type ContactusResponse = {
  __typename?: 'ContactusResponse';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  affectedRows?: Maybe<ContactusResponsePayload>;
  status: Scalars['String']['output'];
};

export type ContactusResponsePayload = {
  __typename?: 'ContactusResponsePayload';
  createdat?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  msgid?: Maybe<Scalars['Decimal']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type HelloResponse = {
  __typename?: 'HelloResponse';
  companyAccountId?: Maybe<Scalars['ID']['output']>;
  currentVersion?: Maybe<Scalars['String']['output']>;
  currentuserid?: Maybe<Scalars['ID']['output']>;
  lastMergedPullRequestNumber?: Maybe<Scalars['String']['output']>;
  wikiLink?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  contactus: ContactusResponse;
  login: AuthPayload;
  refreshToken: AuthPayload;
  register: RegisterResponse;
  requestPasswordReset: ResetPasswordRequestResponse;
  resetPassword?: Maybe<DefaultResponse>;
  verifyAccount: DefaultResponse;
  verifyReferralString: ReferralResponse;
};


export type MutationContactusArgs = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegistrationInput;
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationVerifyAccountArgs = {
  userid: Scalars['ID']['input'];
};


export type MutationVerifyReferralStringArgs = {
  referralString: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<HelloResponse>;
  verifyAccessToken?: Maybe<HelloResponse>;
};


export type QueryVerifyAccessTokenArgs = {
  token: Scalars['ID']['input'];
};

export type ReferralInfo = {
  __typename?: 'ReferralInfo';
  img?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type ReferralResponse = {
  __typename?: 'ReferralResponse';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  affectedRows?: Maybe<ReferralInfo>;
  status: Scalars['String']['output'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userid?: Maybe<Scalars['ID']['output']>;
};

export type RegistrationInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pkey?: InputMaybe<Scalars['String']['input']>;
  referralUuid: Scalars['ID']['input'];
  username: Scalars['String']['input'];
};

export type ResetPasswordRequestResponse = {
  __typename?: 'ResetPasswordRequestResponse';
  ResponseCode?: Maybe<Scalars['String']['output']>;
  nextAttemptAt?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello?: { __typename?: 'HelloResponse', currentuserid?: string | null, currentVersion?: string | null, wikiLink?: string | null, lastMergedPullRequestNumber?: string | null, companyAccountId?: string | null } | null };

export type VerifyAccessTokenQueryVariables = Exact<{
  token: Scalars['ID']['input'];
}>;


export type VerifyAccessTokenQuery = { __typename?: 'Query', verifyAccessToken?: { __typename?: 'HelloResponse', currentuserid?: string | null, currentVersion?: string | null, wikiLink?: string | null, lastMergedPullRequestNumber?: string | null, companyAccountId?: string | null } | null };


export const HelloDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Hello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hello"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentuserid"}},{"kind":"Field","name":{"kind":"Name","value":"currentVersion"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"lastMergedPullRequestNumber"}},{"kind":"Field","name":{"kind":"Name","value":"companyAccountId"}}]}}]}}]} as unknown as DocumentNode<HelloQuery, HelloQueryVariables>;
export const VerifyAccessTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyAccessToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAccessToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentuserid"}},{"kind":"Field","name":{"kind":"Name","value":"currentVersion"}},{"kind":"Field","name":{"kind":"Name","value":"wikiLink"}},{"kind":"Field","name":{"kind":"Name","value":"lastMergedPullRequestNumber"}},{"kind":"Field","name":{"kind":"Name","value":"companyAccountId"}}]}}]}}]} as unknown as DocumentNode<VerifyAccessTokenQuery, VerifyAccessTokenQueryVariables>;