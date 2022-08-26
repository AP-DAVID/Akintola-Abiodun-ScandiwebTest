import { gql } from "graphql-request";

// graphql query to get currency list
export const getCurrencies = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
