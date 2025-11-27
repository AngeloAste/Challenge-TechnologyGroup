# Challenge TechnologyGroup - Frontend

Aplicación web profesional para gestión de Posts desarrollada con **React 18**, **Redux Toolkit** y **Vite**.

## Tecnologías Utilizadas

- **React 18.2**
- **Redux Toolkit 2.0**
- **React Redux 9.0**
- **Axios** para peticiones HTTP
- **Vite 5.0** como bundler
- **CSS3** con variables CSS y diseño responsivo

## Características

- Estado global con Redux Toolkit
- Operaciones asíncronas con createAsyncThunk
- Filtrado en tiempo real de posts
- Validación de formularios en el frontend
- Notificaciones visuales de éxito/error
- Diseño responsivo y moderno
- Animaciones suaves
- Sistema de componentes reutilizables

## Requisitos Previos

- Node.js 16+ y npm/yarn

## Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env
```

## Configuración

Editar el archivo `.env` y configurar la URL del backend:

```env
VITE_API_URL=http://localhost:8080/api/posts
```

## Ejecución

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

La aplicación estará disponible en: `http://localhost:5173`

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── PostFilter.jsx   # Filtrado de posts
│   ├── PostForm.jsx     # Formulario de creación
│   └── PostList.jsx     # Lista de posts
├── features/           # Redux slices
│   └── postsSlice.js   # Estado y acciones de posts
├── App.jsx             # Componente principal
├── store.js            # Configuración de Redux
├── main.jsx            # Punto de entrada
├── index.css           # Estilos globales
└── App.css             # Estilos del componente App
```

## Funcionalidades

- **Listar Posts**: Visualización de todos los posts en cards
- **Crear Post**: Formulario con validación en tiempo real
- **Eliminar Post**: Confirmación antes de eliminar
- **Filtrar Posts**: Búsqueda por nombre con actualización instantánea
- **Estados de carga**: Spinners durante operaciones asíncronas
- **Manejo de errores**: Mensajes descriptivos de error

## Desarrollado por

Angelo Aste - Para TechnologyGroup Challenge
