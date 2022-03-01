import './App.scss';
import Journal from './components/Journal';
import { JournalProvider } from './context/journalContext';

function App() {
  return (
    <div id="app">
      <JournalProvider>
        <Journal />
      </JournalProvider>
    </div>
  );
}

export default App;
