import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './features/postsSlice';
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="icon">🚀</span>
            Challenge TechnologyGroup
          </h1>
          <p className="app-subtitle">
            Sistema Profesional de Gestión de Posts
          </p>
          <div className="tech-stack">
            <span className="tech-badge">Java Spring Boot</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">Redux Toolkit</span>
            <span className="tech-badge">PostgreSQL</span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <section className="section">
            <PostFilter />
          </section>

          <section className="section">
            <PostList />
          </section>

          <section className="section">
            <PostForm />
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <p className="footer-text">
          Desarrollado con dedicación por <strong>Angelo Aste</strong>
        </p>
        <p className="footer-subtitle">
          Demostrando capacidades profesionales para TechnologyGroup
        </p>
      </footer>
    </div>
  );
}

export default App;
