import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append('pdfFiles', file);
      }
      await axios.post('http://127.0.0.1:5002//upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Files uploaded successfully.');
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files.');
    }
  };

  return (
    <div>
      <h2>Upload PDF Files</h2>
      <input type="file" accept=".pdf" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default FileUploadForm;
