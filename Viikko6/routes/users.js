var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get( '/toka',function(request,responce){
  responce.send('olen toka reitti')
  console.log('toka')
})

router.get( '/kolmas/:name',function(request,responce){
  responce.send('terve ' + request.params.name)
  console.log('request.params.name')
})

router.get('/nelijas/:firstName&:lastName',
    function(request, response){
        response.send('terve '+request.params.firstName+" "+request.params.lastName);
    }
);

router.post('/',function(request,responce){
  responce.send(request.body.fname+' '+request.body.lname)
  console.log(request.body.fname+' '+request.body.lname)
})



module.exports = router;
