import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Input = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter text"
        onChangeText={(txt) => {
          setValue(txt);
        }}
        value={value}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTodo}>
        <Text>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
