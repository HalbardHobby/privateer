import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { Plugins } from '@capacitor/core'
// Needed for web registration
import '@capacitor-community/camera-preview'



function App() {

  const [video, setVideo] = useState({ playing: false, source: null });
  const videoRef = useRef(null);


	const startVideo = async () => {
		navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then( stream => {
      setVideo( { playing: true, source: stream } );
      videoRef.current.srcObject = stream;
    } )
    .catch( err => null )
	};

  const stopVideo = async () => {
    let stream = video.source;
    setVideo( { playing: false, source: null } );
    stream.getTracks().forEach( track => track.stop() );
  }

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
        <div>
				<video ref={videoRef} autoPlay muted></video>
			</div>
			<div>
				{ video.playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
      </header>
    </div>
  );
}

export default App;
