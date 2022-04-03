const express = require('express')
const app = express()
const port = process.env.PORT || 8383

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    const { search } = req.body
    res.status(200).send({ message: `current search input is: ${search}` })
    //send post on every key down and respond with new search results
})

app.post('/:song', (req, res) => {
    const { song } = req.params
    res.status(200).redirect()
})

app.listen(port, () => console.log(`Server started on port: ${port}`))