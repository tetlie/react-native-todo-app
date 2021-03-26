import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Item from "./components/Item";
import Input from "./components/Input";

const App = () => {
  const [todos, setTodos] = useState(["Melk", "Brød", "Pasta", "Tomater"]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (index) => {
    setTodos(
      todos.filter((i, x) => {
        return index !== x;
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {todos.map((item, index) => {
        return <Item item={item} index={index} removeItem={handleRemove} />;
      })}
      <Input addTodo={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
