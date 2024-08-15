// components/CharacterList.js
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../graphql/queries';

const UserList = ({ page, onPageChange, onCharacterClick }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { results, info } = data.characters;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((character) => (
          <div
            key={character.id}
            onClick={() => onCharacterClick(character)}
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
