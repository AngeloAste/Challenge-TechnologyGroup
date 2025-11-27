-- ==========================================
-- Challenge TechnologyGroup
-- Script de Creación de Base de Datos
-- ==========================================

-- Crear base de datos
CREATE DATABASE technologygroup_db;

-- Conectar a la base de datos
\c technologygroup_db;

-- Crear tabla posts
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear índice para búsquedas por nombre
CREATE INDEX idx_posts_name ON posts(name);

-- Insertar datos de ejemplo (opcional)
INSERT INTO posts (name, description) VALUES
    ('Introducción a Spring Boot', 'Spring Boot es un framework que simplifica el desarrollo de aplicaciones Java empresariales con configuración mínima.'),
    ('React y Redux Toolkit', 'Redux Toolkit es la forma moderna y recomendada de trabajar con Redux, reduciendo el boilerplate significativamente.'),
    ('PostgreSQL en Producción', 'Mejores prácticas para configurar y optimizar PostgreSQL en ambientes de producción empresarial.'),
    ('Arquitectura Full Stack', 'Cómo diseñar una arquitectura full stack escalable usando Java Spring Boot y React.');

-- Verificar datos insertados
SELECT * FROM posts ORDER BY created_at DESC;

-- ==========================================
-- Queries útiles para mantenimiento
-- ==========================================

-- Contar total de posts
SELECT COUNT(*) as total_posts FROM posts;

-- Buscar posts por nombre
SELECT * FROM posts WHERE name ILIKE '%Spring%';

-- Eliminar todos los posts (usar con precaución)
-- TRUNCATE TABLE posts RESTART IDENTITY;

-- Ver estructura de la tabla
\d posts;
