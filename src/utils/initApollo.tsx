import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "apollo-link-error";
import { useAction } from "../hooks/useAction";
import React, { FC } from "react";



type ProviderProps = {
  children?: JSX.Element
}
export const CustomApolloProvider: FC<ProviderProps> = ({ children }) => {
  const { triggerError } = useAction();
  const errLink = onError(({ graphQLErrors, networkError }) => {
    if (networkError) {
      triggerError({ message: networkError.name });
    }

    if (graphQLErrors) {
      triggerError({ message: graphQLErrors[0].message });

    }
  });
  const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" })

  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    // @ts-ignore
    link: from([errLink, httpLink])
  })

  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  )

}