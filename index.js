const express = require('express')
const app = express()
const clientUrl = '*';


app.use(express.static("public"))

app.listen(process.env.PORT || 8080, () => console.log(`All OK`))