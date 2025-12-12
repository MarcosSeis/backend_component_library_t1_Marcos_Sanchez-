# Component Library Analytics API -- Backend

Backend para el sistema de analíticas. Proporciona autenticación,
tracking de componentes, estadísticas y exportación de datos.

## Tecnologías

-   Node.js\
-   Express\
-   MongoDB Atlas\
-   Mongoose\
-   TypeScript\
-   JWT\
-   Zod\
-   CORS\
-   Dotenv

## Estructura del Proyecto

    backend/
    │── src/
    │   ├── controllers/
    │   │     ├── auth.controller.ts
    │   │     ├── tracking.controller.ts
    │   │     └── export.controller.ts
    │   │
    │   ├── middleware/
    │   │     ├── auth.ts
    │   │     └── validate.ts
    │   │
    │   ├── models/
    │   │     ├── User.ts
    │   │     └── Tracking.ts
    │   │
    │   ├── routes/
    │   │     ├── auth.routes.ts
    │   │     ├── tracking.routes.ts
    │   │     └── export.routes.ts
    │   │
    │   ├── validators/
    │   │     ├── auth.validators.ts
    │   │     └── tracking.validators.ts
    │   │
    │   ├── config/db.ts
    │   └── server.ts
    │
    │── .env.example
    │── package.json
    │── tsconfig.json
    │── README.md

## Instalación

### 1. Clonar repositorio

    git clone https://github.com/MarcosSeis/component-library-backend.git
    cd backend

### 2. Instalar dependencias

    npm install

### 3. Crear archivo `.env`

    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=4000

### 4. Iniciar servidor

    npm run dev

Salida esperada:

    MongoDB connected
    Backend running on port 4000

## Endpoints

### Health Check

**GET /api/health**

Respuesta:

``` json
{ "status": "ok", "timestamp": 17340321200 }
```

# Autenticación

### Registrar usuario

**POST /api/auth/register**

Body:

``` json
{ "email": "test@example.com", "password": "123456" }
```

Respuesta:

``` json
{ "message": "User registered successfully" }
```

### Login

**POST /api/auth/login**

Body:

``` json
{ "email": "test@example.com", "password": "123456" }
```

Respuesta:

``` json
{ "token": "jwt_here" }
```

# Tracking de Componentes

### Registrar evento

**POST /api/components/track**

Body:

``` json
{
  "component": "Button",
  "variant": "primary",
  "action": "click"
}
```

Respuesta:

``` json
{ "message": "Event tracked" }
```

### Obtener estadísticas

**GET /api/components/stats**

Respuesta:

``` json
{
  "total": 28,
  "byComponent": {
    "Button": 14,
    "Input": 6
  }
}
```

# Exportación

### Exportar tracking (CSV o JSON)

**GET /api/components/export?format=csv**\
**GET /api/components/export?format=json**

Requiere JWT:

Header:

    Authorization: Bearer <token>

Ejemplo JSON:

``` json
[
  {
    "component": "Button",
    "variant": "primary",
    "action": "click",
    "timestamp": "2025-12-12T18:10:00.000Z"
  }
]
```

Ejemplo CSV:

    component,variant,action,timestamp
    Button,primary,click,Fri Dec 12 2025 12:17:11 GMT-0600

# Validación con Zod

Ejemplo de esquema:

``` ts
export const trackingSchema = z.object({
  component: z.string(),
  variant: z.string(),
  action: z.string()
});
```

# Middlewares

### Auth Middleware (JWT)

Protege el endpoint de exportación.

### Validate Middleware

Valida body antes del controlador.

# Base de Datos

### Tracking

``` json
{
  "component": "Button",
  "variant": "primary",
  "action": "click",
  "timestamp": "2025-12-12T18:10:00.000Z"
}
```

### Users

``` json
{
  "email": "example@mail.com",
  "password": "$2b$10$..."
}
```

# Backend finalizado

Este backend cumple con:

✔ Autenticación con JWT\
✔ Tracking real\
✔ Exportación CSV y JSON\
✔ Validación con Zod\
✔ Conexión a MongoDB\
✔ Rutas completas\
✔ Listo para integrarse al frontend
