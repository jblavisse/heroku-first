const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('Mes utilisateurs'))

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send('Mon utilisateur numéro'+ id);
})

module.exports = router;