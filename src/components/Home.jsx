import React, { useState } from 'react';
import "../styles/Home_styles.css";
import axios from 'axios';

const Home2 = () => {
    // const [uploadedFiles, setUploadedFiles] = useState([]); 
    const [error, setError] = useState(null); 
    const [responseIn, setResponseIn] = useState(false);

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
      await axios.post('https://files-server.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
        setResponseIn(true);

    //   alert('Files uploaded successfully.');
      setError(null);
    } catch (error) {
      console.error('Error uploading files:', error);
      alert('Error uploading files.');
    }
  };

    // const handleFileInput = async (e) => {
    //     const files = e.target.files;
    //     const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    //     try {
    //         const formData = new FormData();
    //         for (let i = 0; i < files.length; i++) {
    //             const file = files[i];
    //             if (allowedTypes.includes(file.type)) {
    //                 formData.append('files', file);
    //             } else {
    //                 alert(`Unsupported file type: ${file.type}. Please upload PDF or Word documents.`);
    //             }
    //         }
            
    //         const response = await axios.post('http://127.0.0.1:5002//upload', formData, {
    //             headers: {
    //               'Content-Type': 'multipart/form-data'
    //             }
    //           });
    //         setResponseIn(true);
    //         if (response.ok) {
    //             const data = await response.json();
    //             setUploadedFiles(data.uploadedFiles);
    //             setError(null); 
    //         } else {
    //             const errorText = await response.text();
    //             setError(`File upload failed: ${errorText}`);
    //         }
    //     } catch (error) {
    //         setError(`Error uploading files: ${error.message}`);
    //     }
    // };
    
    return (
        <div>
            <div className='navbar'>
                <div className='header'>Pri<div className='header2nd'>Doc</div></div>
                <div></div>
            </div>
            <div className='content1'>
                <div>Upload your files here</div>
            </div>
            <div className='content2'>
                <div>We respect your document privacy</div>
            </div>
            <div className='btn_div'>
                {!responseIn && (
                <>
                {/* <label htmlFor="fileInput" className="custom-file-input">
                    Choose File
                </label> */}
<label htmlFor="file-upload" className="file-input-label">
        Select Files
      </label>
      <input id="file-upload" type="file" accept=".pdf" multiple onChange={handleFileChange} className="file-input" />
      <button className="upload-button" onClick={handleUpload}>Upload Files</button>
    
{/*                     
                <input
                    id="fileInput"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                /> */}
                </>)}
            </div>
            {responseIn && error && <div className="error-message">File Upload failed</div>}
            {responseIn  && !error &&
            <>
        <div style={{ color: 'green' }} className="error-message">File Upload Successful</div>
            {/* <div className='uploaded-files'>
                {uploadedFiles.map((file, index) => (
                    <div key={index}>{file.name}</div>
                ))}
            </div> */}
            </>
            }
        </div>
    );
};

export default Home2;
