import React from 'react';

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <h1 className="notFoundText">Page Not Found</h1>
      <h1 className="notFoundText">La página que estas buscando no existe</h1>
      <img className="notFoundImage" src="/notFound.png" alt="Not Found" />
    </div>
  );
}

export default NotFound;
