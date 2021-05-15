import './App.css';
import { CounterContextProvider } from './CounterContext';

function App() {
  return (
    <CounterContextProvider>
      <div className="app">
        <main className="App-main"></main>
      </div>
    </CounterContextProvider>
  );
}

export default App;
