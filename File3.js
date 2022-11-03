const fs = require ('fs');

// creation file 
fs.writeFile('welcome.txt','this is an exemple of content file',err=>{
    if(err){console.log(err)}
    else {console.log("la creation is done")}
})
fs.rename('welcome.txt','test.txt',err=>{
    err?console.log(err):console.log('done')
})
fs.appendFile('test.txt',"ajout done",err=>{
    err?console.log(err):console.log("add")
})

//create server
const http = require("http") ;
const server = http.createServer(function(req,res){

res.write('<h1>test page introduction <h1/>');
res.end()


})
server.listen(3000,(err)=>{
    err?console.log(err):console.log('ur linked to server 3000')
})
