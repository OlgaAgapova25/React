
import React from'react';
import './App.css';
import Counter from './components/counter';
import InputForm from './components/form';
import Nav from './components/nav';
import ParentCounter from './components/parent';
import Student from './components/propType';
import ShowList from './components/showList';
import TemperatureConverter from './components/tempConverter';
import ToDoList from './components/toDoList';
import InteractiveList from './components/toDoListV2';
import Show from './components/visible';


function App() {
  return (
    <div className="App">
      {/* <Nav />
      <h1>Text</h1>
      <Counter />
      <Show />
      <ShowList />
      <ParentCounter />
      <InputForm />
      <Student name = "Dima" age={30} isStudent={true}/> */}

      <TemperatureConverter />
      <InteractiveList />
      <ToDoList />

    </div>
  );
}

export default App;