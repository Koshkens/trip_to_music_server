const express = require('express')
const app = express()
const port = server.listen(process.env.PORT || 3000);
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