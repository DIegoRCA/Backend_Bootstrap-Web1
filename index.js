const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: Path2D.join(_dirname, 'public')});
})

app.get('/ping', (req, res) => {
    res.send('pong 🏓')
})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})

module.exports = app