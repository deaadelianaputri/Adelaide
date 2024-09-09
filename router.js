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

// Akar Kuadrat
router.get('/akar-kuadrat/:angka', function(req, res) {
    const angka = parseFloat(req.params.angka);
    if (angka < 0) {
        res.status(400).json({
            error: "Tidak bisa menghitung akar kuadrat dari bilangan negatif"
        });
    } else {
        const hasil = Math.sqrt(angka);
        res.json({
            operasi: "akar kuadrat",
            angka: angka,
            hasil: hasil
        });
    }
});


module.exports = router;