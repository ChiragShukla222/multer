import { useState } from "react";
import axios from 'axios';

const App=()=>{
  const [file,setFile]=useState('');

  const onChangeHandler=(e)=>{
      setFile(e.target.files[0]);
  }
  const onSubmitHandler=async()=>{
    const formData=new FormData();
    formData.append('file',file);
    try{
      const res=await axios.post('http://localhost:5000/upload',formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      });
      alert("File" +res.data.filename+"Successfully uploaded in server")
    } catch(err){
          console.log("Error File Uploading : "+err);
    }
  }
  return(
<>
<input type="file" onChange={onChangeHandler} /> <br /> <br />
<input type="submit" onClick={onSubmitHandler}/>

</>
  )
}

export default App;