var prompt=require('prompt');
var http=require('http')
prompt.start();

var PORT;
prompt.get(['port'],function(error,result){
    console.log('Port Number is recieved');
    console.log('PORT is:'+result.port);
    PORT=result.port;
    var server=http.createServer(function(req,res){

        if(req.url='/'){
            res.writeHead(200,{'ContentType': 'text/html'});
            res.write('<html><body><h1>Successfully deployed</h1></body></html>');
        }
    })

    server.listen(PORT,()=>{
        console.log('Server is not running on port no'+PORT);
    })
})