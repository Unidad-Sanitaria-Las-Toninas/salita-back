import express from "express"
import cors from "cors"
import morgan from "morgan"
import turnRoutes from "./routes/turns.js"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/",turnRoutes)


app.listen(PORT, ()=>{
    console.log(`server on http://localhost:${PORT}`)
})