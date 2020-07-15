import React from 'react';
import { useParams } from 'react-router-dom';

const GameDescriptor = () => {
  const { gameName } = useParams();
  return (
    <>
      <h3>{gameName}</h3>
      <p>Lorem ipsum Lorem ipsum Lorem i</p>
    </>
  );
};

export default GameDescriptor;
