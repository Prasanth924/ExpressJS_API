var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id:1,
    description:"Meet mom for lunch",
    completed:false
},
{
    id:2,
    description:"Go to market",
    completed:false
},
{
    id:3,
    description:"Feed my cat",
    completed:false
}
];

app.get('/',function(req,res){

    res.send('Todo API Root');

});

//GET request

app.get('/todos',function(req,res){

    res.json(todos);

});

//GET request by ID

app.get('/todos',function(req,res){

});

app.listen(PORT,function(){

    console.log('Express listening to the port:'+PORT);

});
