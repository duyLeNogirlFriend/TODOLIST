import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let id = 0;
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);


  const handleAdd = () => {
    if(todos?.some(item => item.id === value?.replace(/\s/g,''))) {
        toast.warn('This work has already been added')
    } else{
        setTodos(prev => [...prev, {id: value?.replace(/\s/g,'') , job: value}])
        setValue('')
    }
  }

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))

  }





  

  return (
    <>
    <div className="flex flex-col gap-8 items-center justify-center h-screen">
      <div className="flex gap-8">
      <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={value} 
              onChange={e => setValue(e.target.value)} 
      />
      <button type="button" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
              onClick={handleAdd}
      > Add</button>
      </div>

      <div>
      <h3 className="font-bold text-xl">Content</h3>
      <ul>
        {todos?.map((item) => {
          return(
            <li key={item.id} className="flex gap-10 items-center">
              <span className="my-2"> {item.job} </span>
              <span className="my-2 cursor-pointer hover:bg-blue-700 hover:text-white px-2 py-1 rounded" onClick={() => handleDelete(item.id)}> X </span>
            </li>
          )
        })}
      </ul>
      </div>
    </div>
          <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

    </>
  );
}
 
export default App;
