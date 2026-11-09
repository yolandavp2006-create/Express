
# API REST de tareas

API REST sencilla creada con Node.js y Express para gestionar una lista de
tareas. Los datos se guardan en memoria, por lo que se reinician cada vez que
se vuelve a arrancar el servidor.

## Requisitos

- Node.js instalado.
- npm instalado junto con Node.js.

## Instalación

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   ```

## Configuración del puerto

Por defecto, la API se ejecuta en el puerto `3000`. Para utilizar otro puerto,
crea un archivo `.env` en la raíz del proyecto:

```env
PORT=4000
```

## Arrancar el proyecto

Para iniciar el servidor:

```bash
npm start
```

Durante el desarrollo, `nodemon` reinicia automáticamente el servidor cuando
se modifica un archivo:

```bash
npm run dev
```

Cuando el servidor se inicia, queda disponible en
`http://localhost:3000` (o en el puerto indicado en `PORT`).

## Rutas disponibles

Todas las respuestas tienen formato JSON.

| Método | Ruta | Descripción | Respuestas principales |
| --- | --- | --- | --- |
| `GET` | `/tareas` | Obtiene todas las tareas. | `200` |
| `GET` | `/tareas/:id` | Obtiene una tarea por su identificador. | `200`, `404` |
| `POST` | `/tareas` | Crea una tarea nueva. | `201`, `400` |
| `PATCH` | `/tareas/:id` | Actualiza los campos enviados de una tarea. | `200`, `404` |
| `DELETE` | `/tareas/:id` | Elimina una tarea por su identificador. | `204`, `404` |

### Ejemplos

Obtener todas las tareas:

```http
GET http://localhost:3000/tareas
```

Crear una tarea:

```http
POST http://localhost:3000/tareas
Content-Type: application/json

{
  "titulo": "Preparar la presentación"
}
```

Actualizar una tarea:

```http
PATCH http://localhost:3000/tareas/1
Content-Type: application/json

{
  "completada": false
}
```

Eliminar una tarea:

```http
DELETE http://localhost:3000/tareas/1
```

Para `POST` es obligatorio enviar el campo `titulo`. Si se consulta, actualiza
o elimina un identificador que no existe, la API devuelve `404`.
