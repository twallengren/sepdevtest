// Add required packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const controller = require('./controller')

// Have express create app
const app = express();

// Tell express app to use bodyParser.json() for API endpoints
app.use(bodyParser.json())
app.use(cors())

// Create endpoints
app.get("/api/creatures", controller.read)
app.delete("/api/creatures/:id", controller.delete)
app.put("/api/creatures/:id", controller.update)
app.post("/api/creatures", controller.add)

// Tell the app to start listening on port 3005
app.listen(3005, () => {
    console.log("app running on port 3005")
})