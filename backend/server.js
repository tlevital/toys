const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const port = process.env.PORT || 3000
const ToyService = require('./services/toy.service')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())


// app.use(cookieParser());

// var session = require('express-session')
// app.use(session({
//    secret: 'puki muki',
//    resave: false,
//    saveUninitialized: true,
//    cookie: { secure: false }
// }))



app.get('/', (req, res) => res.send('Hello World!'))

// const cars = [{"id": "c101", "vendor" : "Audu"}, {"id": "c102", "vendor" : "Spiat"}]

// Toy list
app.get('/toy', (req, res) => {
    // console.log('User is: ', req.session.userName);
    console.log('hi from server GET')
    ToyService.query()
        .then(toys => res.json(toys))
})

// Toy Single
app.get('/toy/:id', (req, res) => {
    const toyId = req.params.id
    ToyService.getById(toyId)
        .then(toy => res.json(toy))
})

// Toy delete
app.delete('/toy/:id', (req, res) => {
    console.log('pushed to delete');
    const toyId = req.params.id
        // console.log('toyId at server', toyId);
    ToyService.remove(toyId)
        .then(() => {
            res.json({})
        })
})

//Toy edit
app.put('/toy/:id', (req, res) => {
    const toy = req.body
    console.log('EDIT pushed at server. toy:', toy);
    ToyService.update(toy)
        .then(toy => res.json(toy))
})

// Toy add
app.post('/toy', (req, res) => {
    const toy = req.body;
    console.log('ADD pushed at server. toy:', toy);
    ToyService.add(toy)
        .then(toyWithId => res.json(toyWithId))
})


// app.get('/setUser/:name', (req, res)=>{
//     req.session.userName = req.params.name
//     res.end('DONE')
// })

app.listen(port, () => console.log(`Toy app listening on port ${port}!`))