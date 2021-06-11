const express = require('express')
// require est intelligent
// 1. Pas besoin de .js
// 2. Si on lui donne un dossier en chemin, il va chercher automatiquement
// un fichier index
// const sequelize = require("./models/index.js")
const sequelize = require("./models");

const app = express()

// Récupérer le port d'Heroku, et sinon c'est 3000
const port =  process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

const tasksRouter = require('./routes/tasksRouter');
app.use('/tasks', tasksRouter);

const usersRouter = require('./routes/usersRouter');
app.use('/users', usersRouter);

sequelize.authenticate()
// Si c'est bon
.then(() => {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})
// Si c'est pas bon
.catch(err => {
 console.log('Unable to connect to the database:');
 console.log(err.message);
 process.exit();
})