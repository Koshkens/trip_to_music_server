const express = require('express')
const app = express()
const clientUrl = '*';


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('OK')
})

app.listen(process.env.PORT || 8080, () => console.log(`All OK`))