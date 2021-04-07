import { useState, useRef } from 'react';

const RemoteStream = peerConnection => {
  const [stream, setStream] = useState({ playing: false, source: null});
  const videoRef = useRef(null);

  peerConnection.ontrack = event => {
    event.streams[0].getTracks().forEach( track => {
      setStream({ playing: true, source: track });
      videoRef.current.srcObject = stream;
    });
  };

  return (
    <div className="RemoteStream">
      <video ref={videoRef} autoplay muted></video>
    </div>
  );
}