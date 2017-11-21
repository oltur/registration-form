var express = require('express');
var app = express();
var logger = require('express-logger');
var express_static = require('express-static');
var compression = require('compression')

app.set('port', process.env.PORT || 3000);

app.use(logger({path: "logfile.txt"}));
app.use(compression());

app.use('/', express_static(__dirname + '/public'));

app.listen(app.get('port'), () => console.log('Registration-form app listening on port '+ app.get('port')));
