import './App.css';
import LocalStream from './components/LocalStream';
import RemoteStream from './components/RemoteStream';
import connection from './components/ConnectionManager';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalStream/>
        <RemoteStream peerConnection={connection}/>
      </header>
    </div>
  );
}

export default App;
