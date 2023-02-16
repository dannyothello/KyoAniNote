// This microservice receives:
// A list containing JSON objects (keys: "title" and "visual").
// 
// This microservice returns:
// A list containing 5 randomly picked JSON objects from the input.

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
    console.log("Here's the set of unique random numbers between 1 and 10:")
    console.log(randNumSet)
    return randNumSet
}

// Takes the list of objects, randomly chooses 5 of them, and then returns an array containing
// the picked objects.
async function pickAnime(receivedAnime) {
    console.log("pickAnime is called!")
    let pickedAnimeArr = []
    let pickIndexSet = new randomSetGenerator()
    for (let pickedIndex of pickIndexSet) {
        pickedAnimeArr.push(receivedAnime[pickedIndex-1]) // elements can be [1-10], so zero-index
    }
    console.log("Final arr:", pickedAnimeArr)
    return pickedAnimeArr
}

// This is the primary usecase of the microservice.
app.put("/pick", (req,res) => {
    console.log("PUT/pick is called!")
    pickAnime(req.body)
        .then(pickedAnimeArr => {
            res.status(201).json(pickedAnimeArr)
        })
})