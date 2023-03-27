const express = require('express')
const app = express()

app.use(express.static(path.join(__filename, '/public'))

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

const port = process.env.PORT || 3000

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})

module.exports = app