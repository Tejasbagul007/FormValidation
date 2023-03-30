import React from "react";
import { StyleSheet, View } from "react-native";
import Form from "./Form";

function App() {
  return (
    <View style={styles.app}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
