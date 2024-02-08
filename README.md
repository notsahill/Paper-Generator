# Question-Paper-Generator

 This is a question paper generator
 
1) If you want to fetch all the questions present in the question bank then you need to send a GET request to the "https://paper-generator-notsahll.onrender.com/questions" route.
2) To add a question in the question bank , you need to send a POST request to "https://paper-generator-notsahll.onrender.com/question" route with json body in the specified format
   i.e.
   {
      "question": "What is verb?",
      "subject": "English",
      "topic": "Grammar",
      "difficulty": "Easy",
      "marks": 5
    }
3) To generate a question paper , you need to send a POST request to "https://paper-generator-notsahll.onrender.com/generate" route with json body in the specified format
   i.e.
   {
      "totalMarks": 100,
      "difficultyDistribution": { 
        "easy": 40,
        "medium": 30,
        "hard": 30  
      }
   } 

