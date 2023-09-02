import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import taskRoutes from "./routes"
import './process';

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(express.json());
app.use(taskRoutes)

const uri: string = `${process.env.MONGO_DB_URI}`

const options = { useNewUrlParser: true, useUnifiedTopology: true }



// @ts-ignore
mongoose.connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error
    })

const db = mongoose.connection;
    db.once('open', () => {
      console.log('Connected to MongoDB');
    });
    