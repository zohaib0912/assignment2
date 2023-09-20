import React, { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [editMode, setEditMode] = useState(false); 
  const [currentIndex, setCurrentIndex] = useState(''); 

  function addToList() {
    const tempList = [...list];
    tempList.push(userInput);
    setList(tempList);
    setUserInput(''); 
  }

  function updateInputState(e) {
    setUserInput(e.target.value);
  }

  function deleteItem(index) {
    const tempList = [...list];
    tempList.splice(index, 1);
    setList(tempList);
  }

  
  function editItem(index) {
    const value = list[index]
    setUserInput(value)
    setEditMode(true)
    setCurrentIndex(index)
  }

  function updateItem(){
    const tempList = [...list];
    tempList[currentIndex] = userInput
    setList(tempList);
    setEditMode(false)
    setUserInput('')
    setCurrentIndex('')
  }

  function DeleteAll(){
    const tempList = [...list];
    tempList.splice(0 , list.length);
    setList(tempList);
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={updateInputState} value={userInput} placeholder='Add any item' />
        
        {!editMode 
          ?
          <button onClick={addToList}>Add</button>
          :
          <button onClick={updateItem}>Update</button>
        }
        <button onClick={DeleteAll}>DeleteAll</button>
        <ul>
          {list.map(function (item, index) {
            return <li key={index} style={currentIndex === index ? { backgroundColor: 'green' } : {}}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button> 
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
          })}
        </ul>
        </header>
    </div>
  );
}

export default App;