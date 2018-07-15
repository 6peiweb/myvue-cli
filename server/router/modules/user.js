const express = require('express');
const router = express.Router();

router.get('/intro', (req, res) => {
  return res.send({ data: true, url: 'https://github.com/6peiweb/myvue-cli' });
});

router.post('/intro', (req, res) => {
  return res.send({data: true, message: req.body.info});
});

module.exports = router;
