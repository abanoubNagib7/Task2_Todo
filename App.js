import React,{useState} from 'react';
import {View,StatusBar,Text} from 'react-native';
import {AppStyles as styles} from './styles';
import AddTodo from './src/components/add-todo';
import TodoList from './src/components/todo-list';
const App = ()=>{
  const [todos,setTodos] = useState([])
  const [countr,setCountr] = useState([])
  const handleAddTodo = (todo)=>{
    setTodos([todo,...todos])
  }
  const handlecounter= (num)=>{
    setCountr([...countr,num])
  }
  return(
  <View style={{height:'100%'}}>
    <StatusBar hidden/>
      <Text style={styles.header} >Todo done {countr.length}</Text>
      <AddTodo onTodoAdd = {handleAddTodo}/>
      <TodoList todos={todos} counter={handlecounter}/>
  </View>)
}

export default App;