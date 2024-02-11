//(normally react ma)mero jati pani comonents haru hunxa tyo sabai lai mailey yo app.jsx ma register garaunu parxa
//normal project flow ma hunxa testo

import React, { useEffect, useRef, useState } from 'react'
import '../styles/Share.css'
import { Navbar } from './Navbar'
import { uplodeFile } from '../services/api';


export const App = () => {
  const [file , setfile] = useState('');
  const [result , setresult] = useState('');
  const fileInput = useRef(null);
  
  // console.log(file);

  useEffect(() => {
    const getImg = async() => {
      if(file) {
        //creating new form data
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);

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
  return (
    <>
    <Navbar/>

    <div className='main'>
      <div className="headings">
      <h2>Share Files</h2>
      {/* <h3>uplode and share files link</h3> */}
      </div>
      <button id='uploadBtn' onClick={() => onUplodeClick()}>upload</button>
      <input type="file"
        ref={fileInput}
        style={{ display: "none" }}
        // onChange={(e)=> {setfile(e.target.files[0])}}
        onChange={(e) => setfile(e.target.files[0])}
      />
      <div className="linksection">
        {/* when server sent a link after uploding a file (link goes here) */}
        {/* https://youtu.be/gwVEJqXixGs (included just for testing) */}
        {/* <a href={result} target='_blank'>{result}</a>  */}
        <p>{result}</p>
      </div>
    </div>
</>
  )
}

export default App;

