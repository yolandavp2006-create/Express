require('dotenv').config();
const app = require('./src/app.js');
const PUERTO = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => console.log(`Escuchando en el puerto ${PUERTO}`));