import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const handleInputSubmit = () => {
    history.push('/search', { query });
  }

  return (
    <div className="search-form">
      <input
        onChange={handleInputChange}
        type="text"
        name="query"
        value={query}
        placeholder="Search Movie"
      />
      <button onClick={handleInputSubmit}>Search Movie</button>
    </div>
  );
}

export default SearchForm;
