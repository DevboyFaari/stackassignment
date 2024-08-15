// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        species
        gender
        image
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`;
