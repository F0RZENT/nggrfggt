const { response } = require("express");
const express = require("express");
const cybersportsteam = require("./content/cybersportsteam");
const mydreams = require("./content/mydreams");
const obomne = require("./content/obomne");
const app = express();
app.get("/", function(request, response){
    response.send("<h2>Welcome to this page</h2>");
});
app.get('/page', (req, res) => {
    console.log(req.headers)
    res.json(mystore)
})
app.use(express.static('./public'))
app.listen(8195,()=>{
    console.log('god blessed')
});
app.get('/obomne', (request, response) => {
    response.send(obomne)
})
app.get('/mydreams', (request, response) => {
    response.send(mydreams)
})
app.get('/cybersportsteam', (request, response) => {
    response.send(cybersportsteam)
})