# ghibli-backend

Capa de servicios y proxy de la aplicación Studio Ghibli. 
Actúa como intermediario entre el frontend y la API externa de Ghibli, exponiendo sus propios endpoints REST.

## Tecnologías
- Next.js 16
- Node.js 20
- TypeScript

## Variables de entorno
```env
GHIBLI_API_URL=https://ghibliapi.vercel.app
FRONTEND_URL=https://ghibli-frontend-five.vercel.app
```

## Endpoints
- GET /api/films
- GET /api/films/:id
- GET /api/people
- GET /api/health

## Cómo correrlo
```bash
npm install
npm run dev
```
Corre en http://localhost:3001

## Despliegue
Desplegado en Railway: https://ghibli-backend-production-945b.up.railway.app
