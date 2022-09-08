import { useState } from 'react';
import MyFunction from './components/MyFucntion'

function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
     <div>{show &&  <MyFunction/>}</div>
     <p>
        <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
              {show ? 'Hide Post' : 'Show Post'}
        </button>
     </p>
    </div>
  );
}

export default App;
