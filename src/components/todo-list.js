import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, ScrollView, FlatList} from "react-native";
import { todoList as styles } from "../../styles";
const TodoList = ({todos,counter}) => {
const [newList,seTNewlist] = useState(todos)
const del = (index) => {
  if(index>-1){
    todos.splice(index,1)
    seTNewlist({...newList,todos})
    counter(todos)
  }
}
  return (
    <FlatList
      style={{ height: "100%" }}
      data={todos}
      renderItem={({ item,index }) => {
        return (
          <View style={styles.item}>
            <Text >Title: {item.title}</Text>
            <Checkbox value={item.done} onValueChange={() => del(index)}/>
          </View>
        );
      }
    }
      ListHeaderComponent={() => <Text style={styles.header}>my todos</Text>}
      ListFooterComponent={() => <Text style = {{...styles.header,fontSize:18}}>End of Todos</Text>}
      ListEmptyComponent={() => <Text>no todos today </Text>}
      ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
     
    />
  );
};

export default TodoList;
