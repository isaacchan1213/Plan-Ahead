import React, { useState, useEffect } from 'react'

function App(){

  const [content, setContent] = useState([{}])

  useEffect(() => { //Using useEffect to fetch the /members route from the backend python file
    console.log("Fetching JSON from Flask")
    fetch("/file_content").then(
      res => res.json() // Manipulating the response (return) of the backend. In this case since response is a JSON file, put response into JSON format
    ).then(
      content => { // data is the contents of the response json file
        setContent(content)
        console.log("Trying to log data")
        console.log(content)
      }
    )
  }, []) // Empty array so this only runs once

  const fileValidate = async (e) => {
    const file = e.target.files[0];
    if (file != null) {
      const data = new FormData();
      data.append('file_from_react', file);
  
      let response = await fetch('/url_route',
        {
          method: 'post',
          body: data,
        }
      );
      let res = await response.json();
      if (res.status !== 1){
        alert('Error uploading file');
      }
    }
  };

  const uploadFile = async (e) => {
    const file = e.target.files[0];
    if (file != null) {
      const data = new FormData();
      data.append('file_from_react', file);
  
      let response = await fetch('/url_route',
        {
          method: 'post',
          body: data,
        }
      );
      let res = await response.json();
      if (res.status !== 1){
        alert('Error uploading file');
      }
    }
  };

  return (
    <div>
      <p>test</p>

      <form>
        <input type="file" name="file" onChange={fileValidate}></input>
        <button onClick={uploadFile}></button>
      </form>

      {(typeof content.dependencies === 'undefined') ? ( 
        <p>Loading...</p> // If data.members is undefined, display loading
      ) : (
        content.dependencies.map((member, i) => ( // If data.members is not undefined, map every member to a p tag to display them 1 by 1
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )

  
}

export default App