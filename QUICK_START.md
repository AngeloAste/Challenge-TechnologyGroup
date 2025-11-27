# Guía de Inicio Rápido

Esta guía te ayudará a poner en marcha el proyecto en menos de 5 minutos.

## Paso 1: Base de Datos (1 minuto)

```bash
# Abrir PostgreSQL
psql -U postgres

# Ejecutar script de creación
\i C:/ProyectosPropios/Challenge-TechnologyGroup/DATABASE.sql

# O manualmente:
CREATE DATABASE technologygroup_db;
```

## Paso 2: Backend (2 minutos)

```bash
# Navegar al directorio backend
cd C:\ProyectosPropios\Challenge-TechnologyGroup\backend

# Verificar configuración en application.properties
# Asegúrate de que las credenciales de PostgreSQL sean correctas

# Ejecutar (Maven descargará dependencias automáticamente)
mvn spring-boot:run
```

Verás el mensaje: **"TechnologyGroup Challenge API Started!"**

## Paso 3: Frontend (2 minutos)

```bash
# Abrir NUEVA terminal
cd C:\ProyectosPropios\Challenge-TechnologyGroup\frontend

# Instalar dependencias
npm install

# Ejecutar
npm run dev
```

Verás: **"Local: http://localhost:5173"**

## Paso 4: Probar la Aplicación

1. Abre tu navegador en `http://localhost:5173`
2. Verás la interfaz profesional de TechnologyGroup
3. Prueba crear un post
4. Prueba filtrar posts
5. Prueba eliminar un post

## Troubleshooting

### Backend no inicia
- Verifica que PostgreSQL esté corriendo
- Verifica credenciales en `application.properties`
- Verifica que Java 17+ esté instalado: `java -version`

### Frontend no inicia
- Verifica que Node.js esté instalado: `node -v`
- Elimina node_modules y reinstala: `rm -rf node_modules && npm install`

### Error de CORS
- Verifica que el backend esté corriendo en puerto 8080
- Verifica la URL en `.env` del frontend

## Verificación Rápida

Backend funcionando:
```bash
curl http://localhost:8080/api/posts
```

Deberías ver un array JSON con los posts.

## Credenciales por Defecto

PostgreSQL (modificar según tu configuración):
- Database: `technologygroup_db`
- User: `postgres`
- Password: `postgres`
- Port: `5432`

## Puertos

- Backend: `8080`
- Frontend: `5173`
- PostgreSQL: `5432`

## Comandos Útiles

```bash
# Ver logs del backend
mvn spring-boot:run

# Compilar backend
mvn clean install

# Build frontend para producción
npm run build

# Ver preview de producción
npm run preview
```

---

¡Listo! Ahora tienes una aplicación Full Stack profesional funcionando.

Desarrollado por Angelo Aste para TechnologyGroup.
