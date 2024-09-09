const express = require('express');
const router = express.Router();

/* route init */
router.get('/', function(req, res, next) {
    res.send("Aritmatika Adelaide");
});

// Modulus

router.get('/modulusdea', function(req, res) {
    const angka1 = parseInt(req.body.angka1);
    const angka2 = parseInt(req.body.angka2);
    if (angka2 === 0) {
        res.status(400).json({
            error: "Modulus dengan nol tidak diperbolehkan"
        });
    
    } else {
        res.json({
            operasi: "modulus",
            hasil: angka1 % angka2
        });
    }
});



module.exports = router;