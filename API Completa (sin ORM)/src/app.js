const express = require('express');
const app = express();
app.use(express.json());

let arrayTareas = [
  {
    id: 1,
    titulo: 'Comprar leche y café',
    completada: true
  },
  {
    id: 2,
    titulo: 'Estudiar el método PATCH en Node.js',
    completada: false
  },
  {
    id: 3,
    titulo: 'Configurar la base de datos',
    completada: false
  },
  {
    id: 4,
    titulo: 'Ir al gimnasio',
    completada: true
  }
];

let siguienteId = arrayTareas.length + 1;

app.get('/tareas', (req, res) => res.json(arrayTareas));

app.get('/tareas/:id', (req, res) => {
    const t = arrayTareas.find(x => x.id === Number(req.params.id));
    if (!t) return res.status(404).json({ error: 'Tarea no encontrada'});
    res.json(t);
});

app.post('/tareas', (req, res) => {
    if (!req.body.titulo) return res.status(400).json({ error: 'El título es obligatorio.'});
    const nueva = { id: siguienteId++, titulo: req.body.titulo, completada: false };
    arrayTareas.push(nueva);
    res.status(201).json(nueva);
});

app.patch('/tareas/:id', (req, res) => {
    const t = arrayTareas.find(x => x.id === Number(req.params.id));
    if (!t) return res.status(404).json({ error: 'Tarea no encontrada'});
    
    Object.keys(req.body).forEach(key => {
        if (t.hasOwnProperty(key)) {
            t[key] = req.body[key];
        }
    });

    res.status(200).json({
        mensaje: 'Tarea actualizada',
        t
    });
});

app.delete('/tareas/:id', (req, res) => {
    const t = arrayTareas.find(x => x.id === Number(req.params.id));
    if (!t) return res.status(404).json({ error: 'Tarea no encontrada'});
    arrayTareas.filter(x => x.id !== Number(req.params.id));
    res.status(204).send();
});

module.exports = app;