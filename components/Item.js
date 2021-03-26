import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Item = ({ item, index, removeItem }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        removeItem(index);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
};

export default Item;
