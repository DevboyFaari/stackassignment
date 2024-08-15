// pages/index.js
"use client";
import { SetStateAction, useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './lib/apolloClient';
import DashboardLayout from './components/DashboardLayout';
import CharacterList from './components/UserList';
import CharacterDetail from './components/UserDetail';

const Home = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [page, setPage] = useState(1);

  const handleCharacterClick = (character: SetStateAction<null>) => {
    setSelectedCharacter(character);
  };

  const handleCloseDetail = () => {
    setSelectedCharacter(null);
  };

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  return (
    <ApolloProvider client={client}>
      <DashboardLayout>
        <CharacterList
          page={page}
          onPageChange={handlePageChange}
          onCharacterClick={handleCharacterClick}
        />
        <CharacterDetail
          character={selectedCharacter}
          onClose={handleCloseDetail}
        />
      </DashboardLayout>
    </ApolloProvider>
  );
};

export default Home;
