import './App.css';
import './MusicTable';
import MusicTable from './MusicTable';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
    <h1>Music Library</h1>
    <SearchBar></SearchBar>
    <MusicTable></MusicTable>
    </div>
  );
}

export default App;