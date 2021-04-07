import { useRef, useState } from 'react';


const LocalStream = () => {
  const [stream, setStream] = useState({ playing: false, source: null });
  const videoRef = useRef(null);

  const startStream = () => {
    navigator.mediaDevices.getUserMedia({ audio:true, video:true })
      .then( stream => {
        setStream({ playing: true, source: stream });
        videoRef.current.srcObject = stream;
      })
      .catch( err => null);
  };

  const stopVideo = () => {
    let streamSource = stream.source;
    streamSource.getTracks().forEach( track => track.stop() );
    setStream({ playing: false, source: null });
  };

  return (
    <div className="LocalStream">
				<video ref={videoRef} autoPlay muted></video>
			<div>
				{ video.playing ? (
					<button onClick={stopVideo}>Stop</button>
				) : (
					<button onClick={startVideo}>Start</button>
				)}
			</div>
    </div>
  );

}

export default LocalStream;