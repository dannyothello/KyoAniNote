// This microservice receives:
// A list containing JSON objects with keys of "title" and "visual".
// 
// This microservice returns:
// A list containing 5 randomly picked JSON objects.

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const PORT = 3001
app.listen(PORT, (error) =>{
	if(!error)
		console.log("Microservice is running, listening on port "+ PORT)
	else
		console.log("Error occurred, microservice can't start", error)
	}
)

// Generates a set of 5 numbers in the range [1, 10]
function randomSetGenerator() {
    const randNumSet = new Set()
    while (randNumSet.size < 5){
        randNumSet.add(Math.floor(Math.random() * 10) + 1)
    }
    console.log("here's the list of unique random numbers between 1 and 10:")
    console.log(randNumSet)
    return randNumSet
}

randomSetGenerator()

async function pickAnime(receivedAnime) {
    let pickedAnimeArr = []
    let pickIndexSet = new randomNumGenerator()
    return pickedAnimeArr
}

app.put("/pick", (req,res) => {
    console.log("Pick is called!")
    pickAnime(req.body)
})

app.get('/', (req,res) => {
    res.send("Hello world")
})
