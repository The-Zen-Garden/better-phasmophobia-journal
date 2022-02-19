import './App.scss';
import { ghosts } from './data/ghosts';

function App() {
  return (
    <>
      <div>{ghosts[0].name}</div>
    </>
  );
}

export default App;
