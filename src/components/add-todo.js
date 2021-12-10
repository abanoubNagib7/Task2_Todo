import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity ,NativeModules,LayoutAnimation} from "react-native";
import { addTodoStyles as styles } from "../../styles";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const AddTodo = ({onTodoAdd}) => {
  const [focusToggle, setFocusToggle] = useState(false);
  const [todoTitle,setTodoTitle] = useState('');
const handleAddTodoPress = ()=>{
    const todo = {
        title:todoTitle,
        done:false
    }
    onTodoAdd(todo)
    setTodoTitle('')
}

  return (
    <View style={styles.container}>
      <TextInput
        value={todoTitle}
        onChangeText={(text)=>setTodoTitle(text)}
        onFocus={() => {
          LayoutAnimation.easeInEaseOut()
          
          setFocusToggle(true);
        }}
        onBlur={() => {
            LayoutAnimation.easeInEaseOut()
          setFocusToggle(false);
        }}
        placeholder="enter your todo"
        style={{
          ...styles.todoInput,
          ...(focusToggle ? styles.todoInputFocused : {}),
        }}
      />

      <TouchableOpacity style={styles.todoAddBtn} 
      onPress={handleAddTodoPress}
      >
        
        <Text style={styles.todoAddBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
