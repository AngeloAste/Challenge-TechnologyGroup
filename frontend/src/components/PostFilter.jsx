import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../features/postsSlice';

function PostFilter() {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.posts.filterText);
  const totalPosts = useSelector((state) => state.posts.items.length);
  const filteredCount = useSelector((state) => state.posts.filteredItems.length);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    dispatch(setFilterText(searchInput));
  };

  const handleClear = () => {
    setSearchInput('');
    dispatch(setFilterText(''));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="icon">🔍</span>
          Filtrar Posts
        </h2>
      </div>
      <div className="card-body">
        <div className="filter-controls">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Buscar por nombre..."
            className="input-field"
          />
          <button onClick={handleSearch} className="btn btn-primary">
            Buscar
          </button>
          {filterText && (
            <button onClick={handleClear} className="btn btn-secondary">
              Limpiar
            </button>
          )}
        </div>
        {filterText && (
          <div className="filter-info">
            <p className="info-text">
              Filtrando por: <strong className="highlight">{filterText}</strong>
            </p>
            <p className="info-text">
              Mostrando <strong>{filteredCount}</strong> de <strong>{totalPosts}</strong> posts
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostFilter;
