import React, { useState } from 'react';
import "../styles/Home_styles.css";

const Home2 = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]); 
    const [error, setError] = useState(null); 
    const [responseIn, setResponseIn] = useState(false);

    const handleFileInput = async (e) => {
        const files = e.target.files;
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

        try {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (allowedTypes.includes(file.type)) {
                    formData.append('files', file);
                } else {
                    alert(`Unsupported file type: ${file.type}. Please upload PDF or Word documents.`);
                }
            }

            const response = await fetch('YOUR_UPLOAD_URL', {
                method: 'POST',
                body: formData,
            });
            setResponseIn(true);
            if (response.ok) {
                const data = await response.json();
                setUploadedFiles(data.uploadedFiles);
                setError(null); 
            } else {
                const errorText = await response.text();
                setError(`File upload failed: ${errorText}`);
            }
        } catch (error) {
            setError(`Error uploading files: ${error.message}`);
        }
    };

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
                <div></div>
            </div>
            <div className='btn_div'>
                {!responseIn && (
                <>
                <label htmlFor="fileInput" className="custom-file-input">
                    Choose File
                </label>
                <input
                    id="fileInput"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    multiple
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                />
                </>)}
            </div>
            {responseIn && error && <div className="error-message">File Upload failed</div>}
            {responseIn && !error && 
            <>
            <div className="error-message">File Upload Successful</div>
            <div className='uploaded-files'>
                {uploadedFiles.map((file, index) => (
                    <div key={index}>{file.name}</div>
                ))}
            </div>
            </>
            }
        </div>
    );
};

export default Home2;
