import React, { useState } from 'react'; // Make sure React and useState are imported if they aren't already
import { useQuery } from '@apollo/client'; // Import useQuery from Apollo Client
import { GET_FILTERED_CHARACTERS } from '../graphql/queries'; // Import your GraphQL query

const UserList = ({ page, onPageChange, onCharacterClick, filters, sortBy }) => {
    const { loading, error, data } = useQuery(GET_FILTERED_CHARACTERS, {
      variables: {
        page,
        name: filters.name || null,
        status: filters.status || null,
        species: filters.species || null,
        gender: filters.gender || null,
      },
    });
  
    if (loading) return <div className="lds-hourglass"></div>
    if (error) return <p>Error: {error.message}</p>;
  
    const { results, info } = data.characters;
  
    // Sorting logic
    const sortedResults = [...results].sort((a, b) => {
      if (!sortBy) return 0;
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
  
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sortedResults.map((character) => (
            <div
              key={character.id}
              onClick={() => onCharacterClick(character)}  // Ensure this is attached to the entire card
              className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="text-lg font-bold">{character.name}</h2>
              <p className="text-gray-600">{character.species}</p>
              <p className="text-gray-600">{character.gender}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={!info.prev}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={!info.next}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default UserList;
  