import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//git_fucked
const App =()=>{
    const [counter, setCounter] = useState(0);

    return(
      <div className='App'>
        <p>hello world</p>
        <button onClick={ ()=> setCounter( (prevCount=>prevCount - 1))}> - </button>
        <h4> {counter} </h4>
        <button onClick={ ()=> setCounter( (prevCount=>prevCount + 1))}> + </button>
      </div>
    )
}
export default App;
