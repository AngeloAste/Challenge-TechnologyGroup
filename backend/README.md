# Challenge TechnologyGroup - Backend

API REST profesional para gestión de Posts desarrollada con **Java Spring Boot 3.2** y **PostgreSQL**.

## Tecnologías Utilizadas

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **PostgreSQL**
- **Lombok**
- **Maven**

## Características

- Arquitectura en capas (Controller, Service, Repository)
- Manejo global de excepciones
- Validaciones con Bean Validation
- Logs estructurados
- CORS configurado
- DTOs para transferencia de datos
- Transacciones con @Transactional

## Requisitos Previos

- Java 17 o superior
- Maven 3.6+
- PostgreSQL 12+

## Configuración de Base de Datos

1. Crear base de datos en PostgreSQL:
```sql
CREATE DATABASE technologygroup_db;
```

2. Configurar credenciales en `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/technologygroup_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_password
```

## Instalación y Ejecución

```bash
# Compilar el proyecto
mvn clean install

# Ejecutar la aplicación
mvn spring-boot:run
```

La API estará disponible en: `http://localhost:8080`

## Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /api/posts | Obtener todos los posts |
| GET | /api/posts/{id} | Obtener un post por ID |
| POST | /api/posts | Crear un nuevo post |
| PUT | /api/posts/{id} | Actualizar un post |
| DELETE | /api/posts/{id} | Eliminar un post |

## Estructura del Proyecto

```
src/main/java/com/technologygroup/challenge/
├── config/          # Configuraciones (CORS, etc.)
├── controller/      # Controladores REST
├── dto/            # Data Transfer Objects
├── entity/         # Entidades JPA
├── exception/      # Manejo de excepciones
├── repository/     # Repositorios JPA
└── service/        # Lógica de negocio
```

## Desarrollado por

Angelo Aste - Para TechnologyGroup Challenge
