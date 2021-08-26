import User from './components/User'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Task Manager</h1>
      <main>
        <section>
          <User />
        </section>
      </main>
    </div>
  );
}

export default App;
