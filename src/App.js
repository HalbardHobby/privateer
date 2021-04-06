import logo from './logo.svg';
import './App.css';
import { Plugins } from '@capacitor/core'
import { CameraPreviewOptions, CameraPreviewPictureOptions } from '@capacitor-community/camera-preview'
// Needed for web registration
import '@capacitor-community/camera-preview'

const { CameraPreview } = Plugins;


const openCamera = () => {
  let cameraPreviewOptions = {
    position: 'rear',
    parent: 'cameraPreview',
    className: 'cameraPreview'
  }
  CameraPreview.start(cameraPreviewOptions);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="cameraPreview" className="cameraPreview">

        </div>
        <button onClick={openCamera}>Start Camera</button>
      </header>
    </div>
  );
}

export default App;
