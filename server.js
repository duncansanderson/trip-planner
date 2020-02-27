const express = require('express')
const app = express()

app.use(express.static('data'))

app.get('/', (req, res) => {
    res.send('This is a test')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
