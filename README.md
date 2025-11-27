# Challenge TechnologyGroup

Sistema profesional de gestión de Posts desarrollado con arquitectura Full Stack moderna.

## Descripción

Aplicación web completa que demuestra capacidades profesionales en desarrollo Full Stack, implementando las mejores prácticas de la industria.

## Stack Tecnológico

### Backend
- **Java 17** con **Spring Boot 3.2**
- **Spring Data JPA** para persistencia
- **PostgreSQL** como base de datos
- **Lombok** para código limpio
- **Bean Validation** para validaciones declarativas
- **Maven** como gestor de dependencias

### Frontend
- **React 18** con **Hooks**
- **Redux Toolkit** para gestión de estado
- **Vite** como build tool
- **Axios** para peticiones HTTP
- **CSS3** moderno con variables y Grid/Flexbox

## Características Destacadas

### Arquitectura Backend
- Arquitectura en capas (Controller → Service → Repository)
- DTOs para transferencia segura de datos
- Manejo global de excepciones
- Validaciones declarativas con anotaciones
- Logs estructurados
- CORS configurado para desarrollo y producción
- Transacciones con `@Transactional`

### Arquitectura Frontend
- Componentes funcionales con React Hooks
- Estado global centralizado con Redux Toolkit
- Operaciones asíncronas con `createAsyncThunk`
- Validación en tiempo real de formularios
- Sistema de notificaciones visuales
- Diseño responsivo mobile-first
- Animaciones CSS suaves
- Manejo robusto de errores

## Estructura del Proyecto

```
Challenge-TechnologyGroup/
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/technologygroup/challenge/
│   │       │   ├── config/          # Configuraciones
│   │       │   ├── controller/      # REST Controllers
│   │       │   ├── dto/             # Data Transfer Objects
│   │       │   ├── entity/          # Entidades JPA
│   │       │   ├── exception/       # Manejo de excepciones
│   │       │   ├── repository/      # Repositorios JPA
│   │       │   ├── service/         # Lógica de negocio
│   │       │   └── ChallengeApplication.java
│   │       └── resources/
│   │           └── application.properties
│   ├── pom.xml
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/              # Componentes React
    │   ├── features/                # Redux slices
    │   ├── App.jsx
    │   ├── store.js
    │   ├── main.jsx
    │   └── index.css
    ├── package.json
    └── README.md
```

## Requisitos Previos

- **Java 17** o superior
- **Maven 3.6+**
- **PostgreSQL 12+**
- **Node.js 16+** y npm
- **Git**

## Instalación Completa

### 1. Clonar el repositorio

```bash
cd C:\ProyectosPropios
cd Challenge-TechnologyGroup
```

### 2. Configurar Base de Datos

Crear base de datos en PostgreSQL:

```sql
CREATE DATABASE technologygroup_db;
```

### 3. Configurar Backend

```bash
cd backend

# Editar src/main/resources/application.properties
# Configurar credenciales de PostgreSQL

# Compilar y ejecutar
mvn clean install
mvn spring-boot:run
```

Backend corriendo en: `http://localhost:8080`

### 4. Configurar Frontend

```bash
cd frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar en modo desarrollo
npm run dev
```

Frontend corriendo en: `http://localhost:5173`

## API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/posts` | Obtener todos los posts |
| GET | `/api/posts/{id}` | Obtener un post por ID |
| POST | `/api/posts` | Crear un nuevo post |
| PUT | `/api/posts/{id}` | Actualizar un post |
| DELETE | `/api/posts/{id}` | Eliminar un post |

### Ejemplo de Request Body (POST/PUT)

```json
{
  "name": "Mi Post Increíble",
  "description": "Una descripción detallada del post que estoy creando"
}
```

### Ejemplo de Response

```json
{
  "id": 1,
  "name": "Mi Post Increíble",
  "description": "Una descripción detallada del post que estoy creando",
  "createdAt": "2024-11-26T22:30:00"
}
```

## Validaciones Implementadas

### Backend (Bean Validation)
- Nombre: requerido, min 3 caracteres, max 255
- Descripción: requerido, min 5 caracteres

### Frontend
- Validación en tiempo real
- Mensajes de error descriptivos
- Prevención de envíos inválidos

## Scripts Disponibles

### Backend
```bash
mvn clean install    # Compilar proyecto
mvn spring-boot:run  # Ejecutar aplicación
mvn test            # Ejecutar tests
```

### Frontend
```bash
npm run dev         # Modo desarrollo
npm run build       # Compilar para producción
npm run preview     # Vista previa de producción
```

## Decisiones de Arquitectura

1. **Separación de Capas**: Implementación estricta del patrón MVC en el backend
2. **DTOs**: Uso de objetos de transferencia para desacoplar la API de las entidades
3. **Redux Toolkit**: Simplificación del código Redux con menos boilerplate
4. **Async Thunks**: Manejo elegante de operaciones asíncronas
5. **CSS Variables**: Facilita el mantenimiento y temas consistentes
6. **Validación Dual**: Frontend para UX + Backend para seguridad

## Mejores Prácticas Aplicadas

- Código limpio y autodocumentado
- Principios SOLID
- Inmutabilidad en Redux
- Manejo robusto de errores
- Logs apropiados para debugging
- Separación de responsabilidades
- Componentes reutilizables
- Diseño responsivo
- Accesibilidad (semantic HTML)

## Testing

El proyecto está preparado para implementar tests con:
- **Backend**: JUnit 5 + Mockito
- **Frontend**: Vitest + React Testing Library

## Deploy

El proyecto está listo para deploy en:
- **Backend**: Heroku, Railway, AWS Elastic Beanstalk
- **Frontend**: Vercel, Netlify, GitHub Pages

## Demostración de Capacidades

Este proyecto demuestra competencia en:

- Desarrollo Full Stack con tecnologías modernas
- Arquitectura de software profesional
- Buenas prácticas de desarrollo
- Gestión de estado complejo
- Validaciones robustas
- UI/UX profesional
- Código mantenible y escalable
- Documentación completa

## Autor

**Angelo Aste**

Desarrollado con dedicación para demostrar capacidades profesionales a TechnologyGroup.

---

## Licencia

Este proyecto fue creado como parte de un challenge técnico.

---

**¿Preguntas o sugerencias?** No dudes en contactarme.
