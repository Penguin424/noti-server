import React, {useState} from 'react';

function App() {

  const [data, setData] = useState('');

  const handleSubmit = async(e) => 
  {
    e.preventDefault();

    await fetch('http://localhost:3001/newNoti', {
      method: 'POST',
      body: JSON.stringify({
        message: data
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <div  className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Write your message" 
          onChange={e => setData(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
