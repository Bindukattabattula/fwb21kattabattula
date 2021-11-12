var tiger = require('../models/tiger'); 
 
// List of all tigers 
exports.tiger_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: tiger list'); 
}; 
 
// for a specific tiger. 
// for a specific tiger. 
exports.tiger_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await tiger.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle tiger create on POST. 
exports.tiger_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: tiger create POST'); 
}; 
 
// Handle tiger delete form on DELETE. 
exports.tiger_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tiger delete DELETE ' + req.params.id); 
}; 
 
// Handle tiger update form on PUT. 
exports.tiger_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tiger update PUT' + req.params.id); 
}; 
// List of all tigers 
exports.tiger_list = async function(req, res) { 
    try{ 
        thetiger = await tiger.find(); 
        res.send(thetiger); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.tiger_view_all_Page = async function(req, res) { 
    try{ 
        thetigers = await tiger.find(); 
        res.render('tiger', { title: 'tiger Search Results', results: thetigers }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
// Handle tiger create on POST. 
exports.tiger_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tiger(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tiger_type":"goat", "cost":12, "size":"large"} 
    document.color = req.body.color; 
    document.quantity = req.body.quantity; 
    document.cost = req.body.cost; 
    
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
exports.tiger_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await tiger.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.color)  
               toUpdate.color = req.body.color; 
        if(req.body.place) toUpdate.place = req.body.place; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 