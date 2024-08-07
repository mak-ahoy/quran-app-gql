import express from "express"
import cors from "cors"
import { connectDB } from "./db/connect_db.js";
import { userRouter } from "./routes/user.js";
import { config } from "dotenv";

let PORT = process.env.PORT || 8000

config({
    path: "./config.env",
  });
  

//setting up cross origin 
export const app = express();


app.use(cors())
app.use(express.json())

app.use("/hello", (req, res)=>{res.status(200).json({message: "hello world"})})
app.use("/user", userRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server listening on 5000 http://localhost:${PORT}`);
});

export default app;