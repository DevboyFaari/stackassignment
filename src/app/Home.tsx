import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";
import DashboardLayout from "./components/DashboardLayout";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCharacter,
  setPage,
  setFilters,
  setSortBy,
  clearCharacter,
} from "./redux/characterSlice";

const Home = () => {
  //Uncomment this, if you want to remove the redux parameters

  // const [selectedCharacter, setSelectedCharacter] = useState(null);
  // const [page, setPage] = useState(1);
  // const [filters, setFilters] = useState({
  //   name: '',
  //   status: '',
  //   species: '',
  //   gender: '',
  // });
  // const [sortBy, setSortBy] = useState('');

  // const handleCharacterClick = (character:any) => {
  //   setSelectedCharacter(character);
  // };

  // const handleCloseDetail = () => {
  //   setSelectedCharacter(null);
  // };

  // const handlePageChange = (newPage:any) => {
  //   setPage(newPage);
  // };

  // const handleFilterChange = (e:any) => {
  //   const { name, value } = e.target;
  //   setFilters({
  //     ...filters,
  //     [name]: value,
  //   });
  // };

  // const handleSortChange = (e:any) => {
  //   setSortBy(e.target.value);
  // };

  const dispatch = useDispatch();
  const { selectedCharacter, page, filters, sortBy } = useSelector(
    (state: any) => state.character
  );
  const handleCharacterClick = (character: any) => {
    dispatch(setSelectedCharacter(character));
  };

  const handleCloseDetail = () => {
    dispatch(clearCharacter());
  };

  const handlePageChange = (newPage: any) => {
    dispatch(setPage(newPage));
  };

  const handleFilterChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  const handleSortChange = (e: { target: { value: any } }) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <ApolloProvider client={client}>
      <DashboardLayout>
        <div className="mb-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Filter by Name"
              className="px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="species"
              value={filters.species}
              onChange={handleFilterChange}
              placeholder="Filter by Species"
              className="px-4 py-2 border rounded"
            />
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded"
            >
              <option value="">Filter by Status</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <select
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              className="px-4 py-2 border rounded"
            >
              <option value="">Filter by Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="mt-4">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border rounded"
            >
              <option value="">Sort By</option>
              <option value="name">Name</option>
              <option value="species">Species</option>
              <option value="gender">Gender</option>
            </select>
          </div>
        </div>
        <UserList
          page={page}
          filters={filters}
          sortBy={sortBy}
          onPageChange={handlePageChange}
          onCharacterClick={handleCharacterClick}
        />
        {selectedCharacter && (
          <UserDetail
            character={selectedCharacter}
            onClose={handleCloseDetail}
          />
        )}
      </DashboardLayout>
    </ApolloProvider>
  );
};

export default Home;
