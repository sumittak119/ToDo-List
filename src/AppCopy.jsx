
// import React, { useState } from 'react'
// import './App.css'

// function App() {
//   const [todo, setTodo] = useState("")
//   const [todos, setTodos] = useState([])
//   const [editId, setEditId] = useState(null)
//   const [editValue, setEditValue] = useState("")
  
//   function handleAdd() {
//     if (todo.trim() !== "") {
//       const newTodo = {
//         id: Date.now(),
//         text: todo
//       }
//       setTodos([...todos, newTodo])
//       setTodo("")
//     }
    
//   }
//   function handleEdit(id, text) {
//     setEditId(id)
//     setEditValue(text)
//   }
//   function handleSaveEdit(id) {
//     const updatedTodos = todos.map(item => {
//       if (item.id === id) {
//         return { ...item, text: editValue }
//       }
//       return item
//     })
    
//     setTodos(updatedTodos)
//     setEditId(null)
//   }

//   function handleDelete(id) {
//     const filteredTodos = todos.filter(item => item.id !== id)
//     setTodos(filteredTodos)
//   }
//   function handleKeyPress(e) {
//     if (e.key === 'Enter') {
//       handleAdd()
//     }
//   }

//   return (
//     <>
//       <div>
//       <div  className="m-0 font-[Poppins,sans-serif] bg-[url(https://4kwallpapers.com/images/wallpapers/gradient-background-1280x1280-10974.jpg)] flex justify-center bg-cover bg-no-repeat items-center min-h-screen w-full p-4 md:p-6">
//       <div className='bg-white/20 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-md border border-white/20 text-center w-full max-w-xs sm:max-w-sm md:max-w-md text-white'>
//           <div className='text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 text-black font-bold'>
//             <h2 className='text-xl font-bold my-5'>Add a ToDo</h2>
//             <input 
//               type='text' 
//               value={todo}
//               onChange={(e) => setTodo(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder='Enter Task' 
//               className='w-full py-2 sm:py-2.5 px-3 border-none rounded-lg text-sm sm:text-base bg-white/30 text-black outline-none placeholder:text-gray-200'
//             />
//             <button 
//               onClick={handleAdd} 
//               className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md'>
//               Add
//             </button>
//           </div>
          
//           <h2 className='text-xl font-bold my-3 m-'>Your Tasks</h2>
//           <div className='todos'>
//              {(
//               todos.map(item => (
//                 <div key={item.id} className='my-4 flex sm:my-6 md:my-8 p-3 sm:p-4 bg-white/30 rounded-xl'>
//                   {editId === item.id ? (
//                     <div className="edit-form flex-grow flex">
//                       <input
//                         type="text"
//                         value={editValue}
//                         onChange={(e) => setEditValue(e.target.value)}
//                         className='border rounded-md bg-white w-full p-1 mr-2'
//                       />
//                       <button 
//                         onClick={() => handleSaveEdit(item.id)} 
//                         className='bg-green-600 hover:bg-green-700 p-2 py-1 text-black text-sm font-bold rounded-md mx-1'
//                       >
//                         Save
//                       </button>
//                       <button 
//                         onClick={() => setEditId(null)} 
//                         className='bg-gray-500 hover:bg-gray-600 p-2 py-1 text-white text-sm font-bold rounded-md mx-1'
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   ) : (
//                     <>
//                       <div className="text flex-grow">{item.text}</div>
//                       <div className="buttons">
//                         <button 
//                           onClick={() => handleEdit(item.id, item.text)} 
//                           className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-2'
//                         >
//                           Edit
//                         </button>
//                         <button 
//                           onClick={() => handleDelete(item.id)} 
//                           className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white text-sm font-bold rounded-md mx-2'
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//       </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react'
import './App.css'

function AppCopy() {
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
    <div className="font-sans bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center min-h-screen w-full p-4 md:p-6">
      <div className="bg-white/20 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-md border border-white/20 text-center w-full max-w-xs sm:max-w-sm md:max-w-md text-white">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Add a ToDo</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text" 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter Task" 
              className="w-full py-2 px-3 rounded-lg text-sm sm:text-base bg-white/30 text-black outline-none placeholder:text-gray-600"
            />
            <button 
              onClick={handleAdd} 
              className="bg-violet-800 hover:bg-violet-950 px-4 py-2 text-white text-sm font-bold rounded-md whitespace-nowrap">
              Add Task
            </button>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
        <div className="todos">
          {todos.length === 0 ? (
            <div className="my-4 p-3 bg-white/30 rounded-xl">
              No tasks yet. Add one above!
            </div>
          ) : (
            todos.map(item => (
              <div key={item.id} className="my-3 p-3 bg-white/30 rounded-xl">
                {editId === item.id ? (
                  <div className="edit-form flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="border rounded-md bg-white w-full p-2 text-black"
                    />
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button 
                        onClick={() => handleSaveEdit(item.id)} 
                        className="bg-green-600 hover:bg-green-700 px-3 py-2 text-white text-sm font-bold rounded-md flex-1"
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setEditId(null)} 
                        className="bg-gray-500 hover:bg-gray-600 px-3 py-2 text-white text-sm font-bold rounded-md flex-1"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center">
                    <div className="text-left mb-2 sm:mb-0 sm:flex-grow break-words w-full">
                      {item.text}
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => handleEdit(item.id, item.text)} 
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 text-white text-sm font-bold rounded-md flex-1"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)} 
                        className="bg-red-600 hover:bg-red-700 px-3 py-1 text-white text-sm font-bold rounded-md flex-1"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AppCopy