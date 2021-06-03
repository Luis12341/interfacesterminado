import { ApolloProvider } from "@apollo/client";
import client from "config/gql";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider> 
    )
}

export default MyApp
