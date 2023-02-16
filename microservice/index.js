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

app.put("/pick", (req,res) => {
    console.log("Pick is called!")
})

app.get('/', (req,res) => {
    res.send("Hello world")
})
