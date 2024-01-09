"use client";
import { useState, useRef } from 'react';

const RecordVideo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const videoRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: 'video/webm' });
        setRecordedChunks(chunks);
        setIsPreviewing(true);
      };

      mediaRecorder.start();
      setIsRecording(true);

      setTimeout(() => {
        mediaRecorder.stop();
        setIsRecording(false);
      }, 5000); // Stop recording after 5 seconds (adjust as needed)
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopRecording = () => {
    // Stopping the recording is handled by the setTimeout in startRecording
  };

  const playRecordedVideo = () => {
    if (videoRef && videoRef.current) {
      const recordedBlob = new Blob(recordedChunks, { type: 'video/webm' });
      videoRef.current.src = URL.createObjectURL(recordedBlob);
      videoRef.current.play();
    }
  };

  return (
    <div className="mt-16 p-4">
      {isPreviewing ? (
        <div>
          <p>Recorded Video:</p>
          <video ref={videoRef} controls />
        </div>
      ) : (
        <div>
          <h1>Record Video</h1>
          {!isRecording && (
            <button onClick={startRecording} className='border p-2'>Start Recording</button>
          )}
          {isRecording && (
            <button onClick={stopRecording} className='border p-2'>Stop Recording</button>
          )}
          {recordedChunks.length > 0 && (
            <div>
              <p>Recording Complete!</p>
              <button onClick={playRecordedVideo}className='border p-2'>Preview</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecordVideo;
