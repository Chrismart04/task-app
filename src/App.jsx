import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 ">
      <TaskForm />
      <TaskList />
    </main>
  );
}

export default App;
