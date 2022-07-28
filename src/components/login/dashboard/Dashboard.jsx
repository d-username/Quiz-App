import CreateQuestionsForm from "./CreateQuestionForm";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <main className='main'>
        <h1>Create Questions</h1>
        <CreateQuestionsForm />
      </main>
      <aside className='aside'>
        <div>
          <span class='material-symbols-outlined'>edit</span>Create Quiz
        </div>
        <div>
          <span class='material-symbols-outlined'>list</span>Quiz List
        </div>
        <div>
          <span class='material-symbols-outlined'>logout</span>Logout
        </div>
      </aside>
    </div>
  );
}

