import CreateQuestionsForm from "./CreateQuestionForm";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <main className='main'>
        <h1>Create Questions</h1>
        <CreateQuestionsForm/>
      </main>
      <aside className='aside'>
        <div>Create Quiz</div>
        <div>Quiz List</div>
        <div>Logout</div>
      </aside>
    </div>
  );
}

