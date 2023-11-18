const express = require('express');
const app = express();
const path = require('path');



app.get(express.static('www.localchoicefence.com'))

app.listen(3000)