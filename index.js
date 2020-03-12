const express = require('express')
const app = express()
const clientUrl = '*';


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('OK')
})

app.post('/fail', (req, res) => {
    console.log(req);
    res.send('fail')
})

app.post('/notfail', (req, res) => {
    console.log(req);
    res.send('notfail')
})
app.listen(process.env.PORT || 8080, () => console.log(`All OK`))