import express from 'express'; // Import the express module
const app = express(); // Create an instance of the express module

app.get('/', (req, res) => {// Define a route for the root URL
  res.send('Hello World 2!'); // Send a response with the message "Hello World!"
});

app.listen(3000, () => { // Start the server and listen on port 3000
  console.log('Express server initialized'); // Log a message indicating that the server is running
});

/* Manejo de rutas */
app.get('usuarios',(req,res)=>{
  // Manejar solicitudes GET a la ruta '/usuarios'
});

app.post('/productos',(req,res)=>{
  // Manejar solicitudes POST a la ruta '/productos'
});

/* Fin de manejo de rutas */

/* Middlware */
/*
Las funciones del middleware se pueden utilizar para realizar tareas comunes en múltiples rutas. El siguiente middleware registra información sobre cada solicitud entrante.
*/

app.use((req,res,next)=>{
  console.log('Solicitud recibida',   
  req.method,req.url);
  next();
});

/* Plantillas */
/*
Integra un motor de plantillas para renderizar HTML dinámicamente:
- Instala un motor de plantillas (por ejemplo, ejs, pug -> npm i pug)
- Crea archivos de plantilla (Por ejemplo, index.pug)
- Utiliza la función del motor de plantillas para reendizar la plantilla con datos:
*/
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('index',{title: 'Mi aplicación'});
});

/* Fin de plantillas */
