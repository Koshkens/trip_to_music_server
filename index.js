const express = require('express')
const app = express()
const clientUrl = '*';


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('OK')
})

app.post('/fail', (req, res) => {
    res.send('fail')
})

app.post('/notfail', (req, res) => {
    res.send('notfail')
})
app.listen(process.env.PORT || 8080, () => console.log(`All OK`))