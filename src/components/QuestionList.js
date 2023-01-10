import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions, handleDelete}) {
  

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then (data => setQuestions(data))
  })

  if(!questions){
    return <div>Loading...</div>
  }

  function handleUpdateQuestion(updatedQuestion){
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id){
        return updatedQuestion
      }else{
        return question
      }
    })
    setQuestions(updatedQuestions)
  }

  const questionElements = questions.map((question) => {
    return <QuestionItem key={question.id} question={question} deleteQ={handleDelete} handleUpdateQuestion={handleUpdateQuestion} />
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionElements}</ul>
    </section>
  );
}

export default QuestionList;
