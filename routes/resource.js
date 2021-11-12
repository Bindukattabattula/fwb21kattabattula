

var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 

var tiger_controller = require('../controllers/tiger'); 
 
/// API ROUTE /// 

// GET resources base. 


/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/tiger', tiger_controller.tiger_create_post); 

// DELETE request to delete Costume. 
router.delete('/tiger/:id', tiger_controller.tiger_delete); 

// PUT request to update Costume. 
router.put('/tiger/:id', 
tiger_controller.tiger_update_put); 
 
// GET request for one Costume. 
router.get('/tiger/:id', tiger_controller.tiger_detail); 
 
// GET request for list of all Costume items. 
router.get('/tiger', tiger_controller.tiger_list); 
 
module.exports = router; 