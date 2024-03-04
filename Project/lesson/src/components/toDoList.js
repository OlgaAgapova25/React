import {useState} from "react";

    const initialList = ["Task 1"]
    
    const ToDoList = () => {
        const [list, setList] = useState(initialList);
        const [inputValue, setInputValue] = useState('');
        // const [submittedValue, setSubmittedValue] = useState([]);

        const handleSubmit = (e) => {
            e.preventDefault();
            // setSubmittedValue(inputValue);
            setList((v) => [...v, {inputValue}]);
            setInputValue('');
            
            
        };


        function handleRemove(id) {
            const newList = list.filter((item) => item.id !== id);
        
            setList(newList);
          }

        return (
            <>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add task</button>
        </form>
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          
          <button type="button" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default ToDoList;