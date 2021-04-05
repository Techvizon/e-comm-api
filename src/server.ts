import express from 'express';
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.NODE_SERVER_PORT || '8000';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res,next)=>{
  res.send('<h1>Hello Worlda</h1>')
})

// Listen on port 8080
 app.listen(port,() => {
    console.log("Listening on port " + port);
  });