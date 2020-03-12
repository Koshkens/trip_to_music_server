const express = require('express')
const app = express()
const port = (3000 || process.env.PORT);
const clientUrl = '*';

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server is listening on ${port}`)
})