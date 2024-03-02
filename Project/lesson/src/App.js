
import React from'react';
import './App.css';
import Counter from './components/counter';
import ShowList from './components/showList';
import Show from './components/visible';


function App() {
  return (
    <div className="App">
      <h1>Text</h1>
      <Counter />
      <Show />
      <ShowList />
    </div>
  );
}

export default App;