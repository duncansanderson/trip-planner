const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('data'))

app.get('/', (req, res) => {
    res.send('This is a test')
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}`))
