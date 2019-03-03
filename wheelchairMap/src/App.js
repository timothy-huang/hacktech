import React from "react";
import { SafeAreaView, View } from "react-native";
import { Header } from "./components/common";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <Header headerText="Wheelchair Maps" />
      </View>
    </SafeAreaView>
  );
};

export default App;
