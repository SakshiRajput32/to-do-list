import React ,{useState} from 'react'
import "./App.css"
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';
function App() {
  const[listTodo, setListTodo]= useState([]);
  let adList = (inputText) =>{
    if(inputText!=='')
    setListTodo([...listTodo,inputText]);
  }
  const deletelistItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'> 
      <div className='center-container'>
      <TodoInput  adList={adList}/>
      <h1 className='app-headings'>TODO</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList  key={i} index ={i} item = {listItem} deleteItem = {deletelistItem} />
        )
      })}
      
      </div>
    </div>
  )
}

export default App
