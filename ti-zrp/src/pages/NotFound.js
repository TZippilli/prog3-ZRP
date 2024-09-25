import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-text">Page Not Found</h1>
      <h1 className="not-found-text">La página que estas buscando no existe</h1>
      <img className="not-found-image" src="/notFound.png" alt="Not Found" />
    </div>
  );
}

export default NotFound;
