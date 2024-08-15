import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import client from '../lib/apollo-client';

const GET_USERS = gql`
  query getUsers($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        name
        email
        phone
        company {
          name
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(GET_USERS, {
    variables: {
      options: {
        paginate: {
          page,
          limit: 10,
        },
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const users = data.users.data;
  const totalCount = data.users.meta.totalCount;

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        Page {page} of {Math.ceil(totalCount / 10)}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= Math.ceil(totalCount / 10)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  await client.query({
    query: GET_USERS,
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 10,
        },
      },
    },
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
