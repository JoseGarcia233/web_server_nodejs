const { Router} = require('express');
const router = Router();
const agenda =  require('../agenda.json');


//console.log(agenda);

router.get('/agenda', (req, res) => {

  res.json(agenda);

});

router.post('/agenda', (req, res) => {
  const {nombre, apellido, numero} = req.body;
  
  if(nombre && apellido && numero) {
    const newAgenda = {...req.body};
    console.log(newAgenda);
    agenda.push(newAgenda);
    res.json(agenda);
    
  }else {
    
    res.send('missing a value or worong request');
    
  }
 // res.send('got it');

});


module.exports = router;
