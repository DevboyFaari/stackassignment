import { gql } from '@apollo/client';

export const GET_FILTERED_CHARACTERS = gql`
  query GetFilteredCharacters(
    $page: Int!
    $name: String
    $status: String
    $species: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, species: $species, gender: $gender }
    ) {
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
