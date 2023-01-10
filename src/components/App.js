import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(null)

  function handleNewQuestion(newQuestion){
    setQuestions([...questions, newQuestion])
  }

  function handleDeletedQuestion(deletedQuestion){
    const newQuestionList = questions.filter((question => question.id !== deletedQuestion.id))
    console.log(newQuestionList)
    setQuestions(newQuestionList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={handleNewQuestion} /> : <QuestionList questions={questions} setQuestions={setQuestions} handleDelete={handleDeletedQuestion} />}
    </main>
  );
}

export default App;
