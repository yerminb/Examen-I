const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'CEUTEC' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Pagina de Contacto' });
});

router.get('/boletines', (req, res) => {
  res.render('boletines', { title: 'Boletines' });
});

router.get('/campus', (req, res) => {
  res.render('campus', { title: 'Campus La Ceiba' });
});

module.exports = router;
