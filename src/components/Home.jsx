import React, { useState } from 'react';
import "../styles/Home_styles.css";
import axios from 'axios';

const Home2 = () => {
    // const [uploadedFiles, setUploadedFiles] = useState([]); 
    const [error, setError] = useState(null); 
    const [responseIn, setResponseIn] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [files, setFiles] = useState([]);
    const [fileSelected, setFileSelected] = useState(false);



  const handleFileChange = (e) => {
    setFiles(e.target.files);
    setFileSelected(true);
  };

  const handleUpload = async () => {
    setUploading(true);
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
    finally{setUploading(false);}
  };

    return (
        <div>
            <div className='navbar'>
                <div className='header'>Pri<div className='header2nd'>Doc</div>
                </div>
              
            </div>
            <div className='align'>
            <div className='content1'>
                <div>Upload your files here</div>
            </div>
            <div className='content2'>
                <div>We respect your documents privacy</div>
            </div>
            <div className='btn_div'>
                {!responseIn && (
                <>
                {/* <label htmlFor="fileInput" className="custom-file-input">
                    Choose File
                </label> */}
<label htmlFor="file-upload" className={`file-input-label ${fileSelected ? 'file-selected' : ''}`}>
                            Select Files
                        </label>

      <input id="file-upload" type="file" accept=".pdf" multiple onChange={handleFileChange} className="file-input" />
      <button className={`upload-button ${uploading ? 'upload-complete' : ''}`} onClick={handleUpload}>Upload Files</button>
    
                </>)}
                
            </div>
            <div>
            {uploading && (
                <div className='ua2'>
                    <img src="cloud-upload.gif" alt="Uploading" className="uploading-animation-u"/>
                </div>
            )}

            {responseIn  && !error && (
                <div className='ua'>
                    <img src="checkbox.gif" alt="Uploaded" className="uploading-animation"/>
                </div>
            )}
            </div>


            {responseIn && error && <div className="error-message">File Upload failed</div>}
            {responseIn  && !error &&
          <>
        <div style={{ color: 'green' }} className="error-message">File Upload Successful</div>
           
            </>
            }
        </div>
        </div>
    );
};

export default Home2;
