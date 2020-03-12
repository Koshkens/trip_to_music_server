const express = require('express')
const app = express()
const port = 80
const clientUrl = '*'




app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', clientUrl);
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.send('ok');
});

app.get('/json', (req, res) => {
    res.set('Access-Control-Allow-Origin', clientUrl)
    res.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.send(JSON.stringify({
        message: 'This is public info'
    }))
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server is listening on ${port}`)
})