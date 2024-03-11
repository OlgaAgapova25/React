import React from 'react';
import {Provider} from 'react-redux';
import store from './components/store'
import ThemeToggle from './components/Counter1';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );
}
export default App;

// import React from 'react';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ArticleDetail from './components/ArticleDetail';
// import ArticleList from './components/ArticleList';
// import PagesList from './components/PagesList';
// import PageDetail from './components/PageDetail';

// const articles = [
//   {id: 1, title:'Article 1', content:'Article 1 content'},
//   {id: 2, title:'Article 2', content:'Article 2 content'},
// ];

// const pages = [
//   {id:1, title: 'Main', linkId: 2, linkTitle: 'About us'},
//   {id:2, title: 'About us', linkId: 1, linkTitle:'Main'},
// ];

// const App = () => (
//   <Router>
//     <div> 
//       <Routes>
//         <Route path="/pages/:id" element={<PageDetail pages = {pages} />} />
//         <Route path="*" element={<PagesList pages = {pages} />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;

// import React, {createContext, useContext, useState} from 'react';
// import './App.css'
// import {Provider} from 'react-redux';
// import store from './components/store';
// import Counter from './components/Counter1';

// function GrandParent() {
//   return <Parent message="Hello from the top!" />;
// };

// function Parent(props) {
//   return <Child message={props.message} />;
// }

// function Child(props) {
//   return <GrandChild message={props.message} />;
// }

// function GrandGrandGrandChild(props) {
//   return <span>{props.message}</span>
// }

// const MessageContext = createContext();

// function GrandGrandGrandChild() {
//   const message = useContext(MessageContext);
//   return <span>{message}</span>;
// }

// function GrandParent() {
//   return (
//     <MessageContext.Provider value="Hello from the top Context!">
//       <Parent />
//     </MessageContext.Provider>
//   )
// }

// function Parent() {
//   return <Child />;
// }

// function Child() {
//   return <GrandChild />;
// }

// function GrandChild() {
//   return <GrandGrandGrandChild />;
// }

// function App() {
//   return(
//     <div className="App">
//       <h1>Example React.Context</h1>
//       <GrandParent />
//     </div>
//   )
// }

//Example2 ThemeChange

// const ThemeContext = createContext();

// const ThemedButton = () => {
//   const theme = useContext(ThemeContext);

//   return (
//     <button style={{background: theme.background, color: theme.foreground}}>
//       Themed Button
//     </button>
//   );
// };

// const App = () => {
//   const [theme, setTheme] = useState({
//     background: 'lightgray',
//     foreground: 'black',
//   });

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div>
//         <h1>Example React.Context</h1>
//         <ThemedButton />
//         <button
//         onClick={() => 
//         setTheme({
//           background: 'black',
//           foreground: 'white',
//         })
//       }
//       >Change theme</button>
//       </div>
//     </ThemeContext.Provider>
//   );
// }
// Example3

// const ThemeContext = createContext();
// const NotesContext = createContext();

// const useTheme = () => useContext(ThemeContext);
// const useNotes = () => useContext(NotesContext);

// const NotesList = () => {
//   const {notes} = useNotes();
//   return(
//     <ul>
//       {notes.map((note, index) => (
//         <li key={note.index}>{note}</li>
//       ))}
//     </ul>
//   )
// };

// const NoteInput = () => {
//   const [inputValue, setInputValue] = useState('');
//   const {addNote} = useNotes();

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   }

//   const handleAddNote = () => {
//     addNote(inputValue);
//     setInputValue('');
//   };
//   return (
//     <div>
//       <input
//         value={inputValue} onChange={handleInputChange} />
//         <button onClick={handleAddNote}>Add note</button>
//     </div>
//   );
// };

// const ThemeToggle = () => {
//   const {theme, toggleTheme} = useTheme();
//   return (
//     <button
//       onClick={toggleTheme}>
//       Press to toggle to {theme === 'light' ? 'dark':'light'} theme
//     </button>
//   );
// }

// const App = () => {
//   const [theme, setTheme] = useState('light');
//   const [notes, setNotes] = useState(['Element 1', 'Element 2']);

//   const toggleTheme = () => {
//     setTheme((currentTheme) => (currentTheme === 'light'? 'dark' : 'light'));
//   };

//   const addNote = (note) => {
//     setNotes((prevNotes) => [...prevNotes, note]);
//   };

//   return(
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <NotesContext.Provider value={{notes, addNote}}>
//         <div className='content' style={{color: theme === 'light'? 'black':'white', background: theme === 'light'? 'white':'black'}}>
//           <h1>Example React.Context</h1>
//           <ThemeToggle />
//           <NotesList />
//           <NoteInput />          
//         </div>
//       </NotesContext.Provider>
//     </ThemeContext.Provider>
//   );
// };
// Example 4 HOC
// HOC to add styles to component

// const withStyles = (WrappedComponent, styles) => {
//   return (props) => {
//     const newProps = {...props, styles};
//     return <WrappedComponent {...newProps} />
//   };
// };

// const Button = ({styles}) => {
//   return(
//     <button style = {styles}> Click me</button>
//   );
// };

// const Text = ({styles}) => {
//   return(
//     <p style = {styles}> Text</p>
//   );
// };

// const StyledButton = withStyles(Button, {background: 'blue', color:'white'});
// const StyledButton2 = withStyles(Button, {background: 'green', color:'white'});
// const StyledText = withStyles(Text, {background:'grey', color:'black'});

// const App = () => {
//   return(
//     <div>
//       <h1>HOC example</h1>
//       <StyledButton />
//       <StyledButton2 />
//       <StyledText />
//     </div>
//   )
// }
//Example 5
// HOC for counter

// const withCounter = (WrappedComponent) => {
//   return (props) => {
//     const [count, setCount] = useState(0);
//     const incrementCount = () => {
//       setCount(count + 1);
//     };

//     const newProps = {count, incrementCount, ...props};
//     return <WrappedComponent {...newProps} />
//   };
// };

//   const ClickCounter = ({count, incrementCount, message}) => {
//     return (
//       <div>
//         <h1>{message}</h1>
//         <button onClick={incrementCount}>Click me</button>
//         <p>You clicked {count} times</p>        
//       </div>
//     );
//   }

//   const ClickCounterWithCounterAndProps = withCounter(ClickCounter);

//   const App = () => {
//     return (
//       <div>
//         <h1>HOC for counter example</h1>
//         <ClickCounterWithCounterAndProps message="Click counter: " />
//         <ClickCounterWithCounterAndProps message="New click counter: " />
//       </div>
//     );
//   }


