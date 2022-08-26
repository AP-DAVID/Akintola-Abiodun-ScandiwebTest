import { gql } from "graphql-request";

// get categories name
export const getCategoriesName = gql`
  {
    categories {
      name
    }
  }
`;
