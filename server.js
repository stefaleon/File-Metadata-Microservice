const express = require('express');
const multer = require('multer');
const memStorage = multer.memoryStorage();
const upload = multer({ storage: memStorage });

const PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('upfile'), (req, res) => {
	console.log(req);
	res.json({
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size });
});

app.listen(PORT, process.env.IP, () => {
	console.log(`Server started on port ${PORT}.`);
});


