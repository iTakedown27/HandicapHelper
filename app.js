const express = require('express')
const http = require('http')
const app = express()
const port = 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Up and running!')
})

app.listen(port, () => {

})