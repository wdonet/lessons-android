import React from 'react';
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h3>404: Not Found</h3>
      <p>Unable to find <code>{pathname}</code></p>
      <p>Please go back <Link to="/home">Home</Link></p>
    </>
  );
};

export default NotFound;
