import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Message message = "Message text 1" />
      <Message message = "Message text 2" />
    </div>
  );
}

function Message({message}) {
  return (
  <div>
    <p className="MyMessage"> {message} </p>
  </div>  );
}

export default App;
