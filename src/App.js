import React from 'react'
import "./App.css";

const App = () => {
  const arr = [
    1, 2
  ]
  return (
    <div className='App'>
      <div className='Container'>
        <div className='title'>
          TODO
        </div>
        <form className='InputContainer'>
          <input type={'text'} className='input' name='input' id='name'/>
          <button>Go</button>
        </form>

        <ul className='Todolist'>
          <li className='Todoitem'>
            <p>Todo 1</p>
            <button>edit</button>
            <button>delete</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App
