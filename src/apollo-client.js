import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://poetic-sawfly-94.hasura.app/v1/graphql', //base url API dari GraphQL
    cache: new InMemoryCache(), //setting add cache ke memory
    headers: {
        'x-hasura-admin-secret' : '9dFpnMorBdLGNwUXf3iCHkrO4apVtrZnLTC5inJp0KQyhyeJ9IFV8qsemAqU5xZn' //request headers dari console hasura
    }
})

export default client;