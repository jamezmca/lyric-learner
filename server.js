const fs = require('fs')
const express = require('express')
const app = express()
const port = process.env.PORT || 8383

//Middleware
app.use(express.static('public'))
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.post('/', (req, res) => {
    const { lyrics } = req.body
    // res.status(200).send({ message: `current search input is: ${search}` })
    //send post on every key down and respond with new search results
    console.log(lyrics)
    res.status(200).redirect('/song')
})

app.get('/:song', (req, res) => {
    const { song } = req.params
    console.log(song)
    const file = 'song'
    try {
        return fs.existsSync(`./public/${file}.html`) ?
            res.sendFile(`${file}.html`, { root: __dirname + '/public' }) :
            res.send('<a href="/">Page not found | Return home</a>')
    } catch (err) {
        console.log(err)
        res.send('<a href="/">Page not found | Return home</a>')
    }
})

app.listen(port, () => console.log(`Server started on port: ${port}`))