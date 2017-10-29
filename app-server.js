var express = require ('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootsrap/dist'));

app.listen(3000);

console.log("polling server is running at 'http//localhost:3000'");
