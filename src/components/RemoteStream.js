import { useState, useRef } from 'react';

const RemoteStream = props => {
  const [stream, setStream] = useState({ playing: false, source: null});
  const videoRef = useRef(null);

  props.peerConnection.ontrack = (event) => {
    event.streams[0].getTracks().forEach( track => {
      setStream({ playing: true, source: track });
      videoRef.current.srcObject = stream;
    });
  };

  return (
    <div className="RemoteStream">
      <video ref={videoRef} autoPlay muted></video>
    </div>
  );
}

export default RemoteStream;