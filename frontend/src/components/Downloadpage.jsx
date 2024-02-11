import React, { useState , useEffect } from 'react';
import { Navbar } from './Navbar';
import '../styles/download.css'; // Make sure to import your CSS file
import { downloadFile } from '../services/downloadApi';
import { getDBcode } from '../services/getDbcode';


const Downloadpage = () => {
  const [downloadcode , setDownloadcode] = useState(null);
  const [codefromDatabase , setCodefromDatabase] = useState(null);

  useEffect(() => {
    const fetchCodeFromDatabase = async () => {
      try{
        const code = await getDBcode(downloadcode);
        setCodefromDatabase(code);
        console.log(code);
      } catch(err){
        console.error('Error fetching code from the database:', err);
      }
    };

    if(downloadcode) {
      fetchCodeFromDatabase(); 
    }
  } , [downloadcode]);

  const handelDownload = async () => {
    const enteredCode = document.getElementById('inputbox').value;
    setDownloadcode(enteredCode);
};

useEffect(() => {
    const handleDownloadLogic = async () => {
        if (downloadcode && codefromDatabase) {
            const response = await downloadFile(downloadcode, codefromDatabase);
            const { _id } =  response;
            const downloadUrl = `https://fileshare-5n8b.onrender.com/file/${_id}`;

            const link = document.createElement('a');

            link.href = downloadUrl;

            link.click();
        }
    };

    handleDownloadLogic();
}, [downloadcode, codefromDatabase]);
  return (
    <>
      <Navbar/>
      <div className='main'>
        <div className="headings">
          <h2>Download File</h2>
        </div>
        <input id='inputbox' type="text" placeholder='Enter Code To Download' name='downloadcode' />
        <button id='Download' onClick={handelDownload}>Download</button>
      </div>
    </>
  );
};

export default Downloadpage;
