import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class Screen2 extends Component {
  static navigationOptions = {
    title: "Screen3"
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "powderblue" }}>
        <Text>{this.props.navigation.state.params.name}</Text>
        <Text>hello world</Text>
      </View>
    );
  }
}
