//(normally react ma)mero jati pani comonents haru hunxa tyo sabai lai mailey yo app.jsx ma register garaunu parxa
//normal project flow ma hunxa testo
//future scope folder uplode (by using file processing logic)

import React, { useEffect, useRef, useState } from 'react'
import '../styles/Share.css'
import { Navbar } from './Navbar'
import { uplodeFile } from '../services/api';


export const App = () => {
  const [file, setfile] = useState('');
  const [result, setresult] = useState('');
  const fileInput = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // console.log(file);

  useEffect(() => {
    const getImg = async () => {
      if (file) {
        //creating new form data
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        /*
        after creting formdata object now have to send image
        to backend server via api 
        hence the uplode file will do that
        */
        const response = await uplodeFile(data);
        setresult(response.data.code);

      }
    }
    getImg();
  }, [file])


  const onUplodeClick = () => {
    fileInput.current.click();
  }

  /*
  
  */
  const onFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    //checks if the dataTransfer object (which holds the data being dragged) contains files and if at least one file is present
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      setfile(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <>
      <Navbar />

      <div
        className={`main ${isDragging ? 'dragging' : ''}`}
        onDrop={onFileDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <div className="headings">
          <h2>Share Files</h2>
        </div>
        <button id='uploadBtn' onClick={() => onUplodeClick()}>Upload</button>
        <input
          type="file"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={(e) => setfile(e.target.files[0])}
        />
        <div className="linksection">
          <p>{result}</p>
        </div>
        {isDragging && (
          <div className="drag-drop-hint">
            <p>Drop files here to upload</p>
          </div>
        )}
      </div>
    </>
  );

}

export default App;

