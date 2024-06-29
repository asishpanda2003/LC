const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const {MongoDb} = require('./Database.js'); 
const UserData=require('./Controller/UserData.js')
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

MongoDb();

app.listen(process.env.PORT||3000, () => {
    console.log(`backend started at ${process.env.PORT}`)

})

const userRoute = require("./Routes/UserRoute.js")
app.use("/api", userRoute)



