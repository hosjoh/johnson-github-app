import './App.css';

function App() {
  return (
    <div className="App">
      <main className="card">
        <h1>My React Application</h1>
        <p>This application was created with React.</p>

        <button onClick={() => alert('Hello from React!')}>
          Click Me
        </button>
      </main>
    </div>
  );
}

export default App;