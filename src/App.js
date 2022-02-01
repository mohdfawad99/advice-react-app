import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then(res => setAdvice(res.data.slip.advice))
      .catch(err => console.log(err))
  }

  useEffect(() => fetchAdvice(), [])

  return (
    <div className="App">
      <div className='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
