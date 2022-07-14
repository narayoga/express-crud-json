const fs = require('fs')
const express = require('express')
const {addPlayer, findPlayer, loadUser} = require('./controller/function')

const app = express()
const port = 8000
const dataPath = 'player.json'

//setting
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req,res) => {
    player = loadUser()
    res.render('home', {
        title:"Home", 
        player
    })
})

app.get('/gamepage', (req,res) => {
    res.render('gamepage', {
        title: "gamepage",
    })
})

app.post('/gamepage', (req,res) => {
    addPlayer(req.body)
    res.redirect('/')
})

app.listen(port, ()=> {
    console.log(`http://localhost:${port} activated`)
})