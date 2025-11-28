import { useDispatch, useSelector } from 'react-redux';
import { deletePost, setEditingPost } from '../features/postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const { filteredItems, status, error } = useSelector((state) => state.posts);

  const handleEdit = (post) => {
    dispatch(setEditingPost(post));
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`¿Estás seguro de eliminar el post "${name}"?`)) {
      try {
        await dispatch(deletePost(id)).unwrap();
        showNotification('Post eliminado exitosamente', 'success');
      } catch (error) {
        showNotification('Error al eliminar el post: ' + error, 'error');
      }
    }
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('show');
    }, 100);

    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (status === 'loading') {
    return (
      <div className="card">
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Cargando posts...</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="card">
        <div className="error-container">
          <span className="error-icon">⚠️</span>
          <p className="error-text">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="icon">📋</span>
          Lista de Posts
          {filteredItems && filteredItems.length > 0 && (
            <span className="post-count">{filteredItems.length}</span>
          )}
        </h2>
      </div>
      <div className="card-body">
        {!filteredItems || filteredItems.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p className="empty-text">No hay posts para mostrar</p>
            <p className="empty-subtitle">Crea tu primer post usando el formulario de abajo</p>
          </div>
        ) : (
          <div className="posts-grid">
            {filteredItems.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-card-header">
                  <h3 className="post-title">{post.name}</h3>
                  <span className="post-id">ID: {post.id}</span>
                </div>
                <div className="post-card-body">
                  <p className="post-description">{post.description}</p>
                  <p className="post-date">
                    <span className="icon-small">📅</span>
                    {formatDate(post.createdAt)}
                  </p>
                </div>
                <div className="post-card-footer">
                  <button
                    onClick={() => handleEdit(post)}
                    className="btn btn-edit"
                  >
                    <span className="icon-small">✏️</span>
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(post.id, post.name)}
                    className="btn btn-delete"
                  >
                    <span className="icon-small">🗑️</span>
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostList;
