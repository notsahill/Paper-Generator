//All imports
const express = require("express");
const dotenv = require("dotenv").config();
const serverless = require("serverless-http");

const connectDB = require("./configuration/dbConnection");

const {
  getAllQuestions,
  addQuestion,
  sayHello
} = require("./controllers/questionController");
const { generatePaper } = require("./controllers/generatePaperController");

// port declaration 
const port = process.env.PORT || 5000 ;
 
//Connection to mongoDB database
connectDB(); 

// app initialization
const app = express();
app.use(express.json());

// API routes
app.get("/questions", getAllQuestions); // API route to Get all questions
app.post("/question", addQuestion); // API route to Add a new question to the Question Bank
app.post("/generate", generatePaper); // API route to Generate a new question paper
app.get("/", sayHello);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

// module.exports.handler = serverless(app);
