// components/CharacterDetail.js
const UserDetail = ({ character, onClose }) => {
    if (!character) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96">
          <button onClick={onClose} className="text-red-500 float-right">
            Close
          </button>
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-bold">{character.name}</h2>
          <p className="mt-2"><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
    );
  };
  
  export default UserDetail;
  