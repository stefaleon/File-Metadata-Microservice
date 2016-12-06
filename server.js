const express = require('express');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.post('/upload', (req, res) => {
	console.log(req);
	res.send('upload');
});

app.listen(PORT, process.env.IP, () => {
	console.log(`Server started on port ${PORT}.`);
});


