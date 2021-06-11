const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('Mes tâches'))

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send('Ma tâche numéro'+ id);
})

module.exports = router;