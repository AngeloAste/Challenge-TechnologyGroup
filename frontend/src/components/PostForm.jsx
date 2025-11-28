import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost, clearEditingPost } from '../features/postsSlice';

function PostForm() {
  const dispatch = useDispatch();
  const editingPost = useSelector((state) => state.posts.editingPost);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingPost) {
      setFormData({
        name: editingPost.name,
        description: editingPost.description
      });
    }
  }, [editingPost]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    } else if (formData.name.trim().length > 255) {
      newErrors.name = 'El nombre no puede exceder 255 caracteres';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    } else if (formData.description.trim().length < 5) {
      newErrors.description = 'La descripción debe tener al menos 5 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
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

  const handleCancel = () => {
    dispatch(clearEditingPost());
    setFormData({ name: '', description: '' });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (editingPost) {
        await dispatch(updatePost({ id: editingPost.id, postData: formData })).unwrap();
        showNotification('Post actualizado exitosamente', 'success');
        dispatch(clearEditingPost());
      } else {
        await dispatch(createPost(formData)).unwrap();
        showNotification('Post creado exitosamente', 'success');
      }
      setFormData({ name: '', description: '' });
      setErrors({});
    } catch (error) {
      showNotification(`Error al ${editingPost ? 'actualizar' : 'crear'} el post: ` + error, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">
          <span className="icon">{editingPost ? '✏️' : '➕'}</span>
          {editingPost ? 'Editar Post' : 'Crear Nuevo Post'}
        </h2>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre del Post
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa el nombre del post"
              className={`input-field ${errors.name ? 'input-error' : ''}`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="error-message">
                <span className="icon-small">⚠️</span>
                {errors.name}
              </p>
            )}
            <p className="input-hint">
              Mínimo 3 caracteres, máximo 255
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Descripción
              <span className="required">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Ingresa la descripción del post"
              rows="5"
              className={`input-field ${errors.description ? 'input-error' : ''}`}
              disabled={isSubmitting}
            />
            {errors.description && (
              <p className="error-message">
                <span className="icon-small">⚠️</span>
                {errors.description}
              </p>
            )}
            <p className="input-hint">
              Mínimo 5 caracteres
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ flex: 1 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-small"></span>
                  {editingPost ? 'Actualizando...' : 'Creando...'}
                </>
              ) : (
                <>
                  <span className="icon-small">{editingPost ? '💾' : '➕'}</span>
                  {editingPost ? 'Actualizar Post' : 'Crear Post'}
                </>
              )}
            </button>
            {editingPost && (
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-secondary"
                disabled={isSubmitting}
              >
                <span className="icon-small">❌</span>
                Cancelar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
