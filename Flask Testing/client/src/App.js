import React, { useState, useEffect } from 'react'

function App(){

  const [data, setData] = useState([{}])

  useEffect(() => { //Using useEffect to fetch the /members route from the backend python file
    fetch("/add_todo").then(
      res => res.json() // Manipulating the response (return) of the backend. In this case since response is a JSON file, put response into JSON format
    ).then(
      data => { // data is the contents of the response json file
        setData(data)
        console.log(data)
      }
    )
  }, []) // Empty array so this only runs once

  const [content, setContent] = useState({});

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
        <input type="file" name="file" onChange={this.uploadFile}></input>
      </form>


      /*
      <form>
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
        <button 
        type="submit" 
        value="Add Todo"
        onClick={async ()=> {
          const todo = { content };
          const response = await fetch("/add_todo", {
            method: "POST",
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify(todo)
          })
          if (response.ok){
            console.log("it worked")
          }
          console.log("it didn't work")
        }}
        >

        </button>
      </form>*/
      {(typeof data.members === 'undefined') ? ( 
        <p>Loading...</p> // If data.members is undefined, display loading
      ) : (
        data.members.map((member, i) => ( // If data.members is not undefined, map every member to a p tag to display them 1 by 1
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )

  
}

export default App