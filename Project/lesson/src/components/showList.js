import {useState} from "react";

    const initialList = [
    { id: 1, text: "Это первый комментарий", vis:true },
    { id: 2, text: "Это второй комментарий", vis:true },
    { id: 3, text: "Это третий комментарий", vis:true }]
    
    const ShowList = () => {
        const [list, setList] = useState(initialList);

        function handleRemove(id) {
            const newList = list.filter((item) => item.id !== id);
        
            setList(newList);
          }

        return (
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
  );
};

export default ShowList;