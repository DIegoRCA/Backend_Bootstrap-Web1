const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  });

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);



