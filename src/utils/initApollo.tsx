import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "apollo-link-error";
import { useAction } from "../hooks/useAction";
import React, { FC } from "react";
import { Children } from "../models";

export const CustomApolloProvider: FC<Children> = ({ children }) => {
  const { triggerError } = useAction();

  const errLink = onError(({ graphQLErrors, networkError }) => {
    if (networkError) {
      triggerError({
        error: {
          title: "Network Error",
          message: networkError.message,
        },
      });
    }

    if (graphQLErrors) {
      triggerError({
        error: {
          title: "GraphQL Error",
          message: graphQLErrors[0].message,
        },
      });
    }
  });
  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token") || null;
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    }));

    return forward(operation);
  });
  const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    // @ts-ignore
    link: from([authMiddleware, errLink, httpLink]),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
