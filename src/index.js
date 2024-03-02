import express from "express"
import cors from "cors"
import morgan from "morgan"
import turnRoutes from "./routes/turns.js"

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/",turnRoutes)


app.listen(3000, ()=>{
    console.log("server on http://localhost:3000")
})