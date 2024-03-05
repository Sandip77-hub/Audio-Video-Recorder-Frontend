import React, { useState } from 'react';

const ShowResult = () => {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('video', selectedFile);

    try {
      const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });
      
      // Check if the upload was successful
      if (response.ok) {
        // If successful, fetch the result data from the backend
        const resultResponse = await fetch('YOUR_RESULT_API_ENDPOINT'); // Adjust the result endpoint URL
        const resultData = await resultResponse.json();
        setResult(resultData);
      } else {
        console.error('Error uploading video:', response.status);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div className='upload-image'>
      <div>
        <input type="file" onChange={handleFileChange} accept="video/*" />
        <button onClick={handleUpload}>Upload</button>
      </div>
      {selectedFile && (
        <div>
          <h3>Selected Video:</h3>
          <video controls width="400">
            <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <h2 className='display-item'>Display Result</h2>
      {result && (
        <div>
          {/* Display the result data here */}
        </div>
      )}
    </div>
  );
};

export default ShowResult;

