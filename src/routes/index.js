const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({"phoonebook":"nombre"});
})

module.exports = router;