import {React, useState,useRef,useEffect} from 'react'
import "../styles/Home_styles.css"
/*
const Fileupload = () => {
    const [inputText,setInputText] =useState(null);
    const [binaryImage,setBinaryImage]=useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false)
    const [caption, setCaption] = useState(null)
    const [description , setDescription]=useState(null);
       const handleDragEnter = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
      const handleDragLeave = () => {
      setIsDragging(false);
    };
  
      const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      
      const files = e.dataTransfer.files;

      if (files.length > 0) {
        setBinaryImage(e.target.files[0])
        const imageFile = files[0];
        setUploadedImage(URL.createObjectURL(imageFile));
        
      }
    };
        const handleFileInput = (e) => {
      // setUploadedImage(e.target.files[0]);
      // handleSubmit();
      setBinaryImage(e.target.files[0])
      // console.log(e.target.files[0])
      

      const file = e.target.files[0];
      if (file) {
        setUploadedImage(URL.createObjectURL(file));
        console.log("IMAGE ADDED")
        
      }
    };
    
      return(
      <>
      <div className='inputBar'>
            <div
                className={`drag-drop-rectangle ${isDragging ? 'dragging' : ''} `}
                onDragEnter={handleDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {uploadedImage && (
                <div className="preview-container">
                    Got the files
                </div>
                )}
                {!uploadedImage && (
                <div className="upload-container">
                    <span className="upload-icon">
                        <img  className='icon-upload' src="hello" alt="file upload icon" onClick={handleFileInput} />
                        </span>
                    <p>Drag & Drop your image here</p>
                    <label htmlFor="fileInput" className="upload-button">
                    Upload Image
                    </label>
                    <input
                    type="file"
                    id="fileInput"
                    accept=".pdf"
                    onChange={handleFileInput}
                    style={{ display: 'none' }}
                    />
                    
                </div>
                
                )}
            </div>
      </div>
      </>)
}
*/
const Home = () => {
      
const [toggleFileupload, setToggleFileUpload] = useState(false);
  return (
    <><div className='navbar'>
          <div className='header'>Pri<div className='header2nd'>Doc</div></div>
          <div></div>
      </div>
      <div className='content1'>
            <div>Great app that makes your life easier</div>
      </div>
      <div className='content2'>
            <div>Great app that makes your life easier</div>
      </div>
      <div className='btn_div'>
            <button className='btn' /*onClick={setToggleFileUpload(true)}*/>Upload</button>
      </div>
      {/* { toggleFileupload && <Fileupload/>} */}
      </>
  )
}

export default Home