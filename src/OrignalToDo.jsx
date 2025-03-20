
import React, { useState } from 'react'
import './App.css'


function OrignalToDo() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState("")
  
  function handleAdd() {
    if (todo.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: todo
      }
      setTodos([...todos, newTodo])
      setTodo("")
    }
    
  }
  function handleEdit(id, text) {
    setEditId(id)
    setEditValue(text)
  }
  function handleSaveEdit(id) {
    const updatedTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, text: editValue }
      }
      return item
    })
    
    setTodos(updatedTodos)
    setEditId(null)
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter(item => item.id !== id)
    setTodos(filteredTodos)
  }
  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <>
      <div>
      <div  className="bg-gradient-to-b from-black to-white">
      <div className='container mx-auto  rounded-xl p-5 bg-violet-200 min-h-screen'>
          <div className='addtodo'>
            <h2 className='text-xl font-bold my-5'>Add a ToDo</h2>
            <input 
              type='text' 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder='Enter Task' 
              className='border rounded-md mx-5 bg-white w-80 p-1'
            />
            <button 
              onClick={handleAdd} 
              className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md'>
              Add
            </button>
          </div>
          
          <h2 className='text-xl font-bold my-3 m-'>Your Tasks</h2>
          <div className='todos'>
             {(
              todos.map(item => (
                <div key={item.id} className='todo flex justify-between items-center bg-white p-2 my-2 rounded-md'>
                  {editId === item.id ? (
                    <div className="edit-form flex-grow flex">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className='border rounded-md bg-white w-full p-1 mr-2'
                      />
                      <button 
                        onClick={() => handleSaveEdit(item.id)} 
                        className='bg-green-600 hover:bg-green-700 p-2 py-1 text-white text-sm font-bold rounded-md mx-1'
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setEditId(null)} 
                        className='bg-gray-500 hover:bg-gray-600 p-2 py-1 text-white text-sm font-bold rounded-md mx-1'
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text flex-grow">{item.text}</div>
                      <div className="buttons">
                        <button 
                          onClick={() => handleEdit(item.id, item.text)} 
                          className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-2'
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(item.id)} 
                          className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-2'
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default OrignalToDo