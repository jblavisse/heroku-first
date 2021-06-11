const express = require('express')

const app = express()

// Récupérer le port d'Heroku, et sinon c'est 3000
const port =  process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/services', (req, res) => res.send('Mes services'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})