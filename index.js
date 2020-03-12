const express = require('express')
const app = express()
const clientUrl = '*';


app.use(express.static("public"))

app.listen(8080 || process.env.PORT, () => console.log(`All OK`))