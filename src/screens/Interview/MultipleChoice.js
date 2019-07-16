import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { CheckBox} from "react-native-elements"

class MultipleChoice extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 19, marginBottom: 10 }}>{this.props.number}. {this.props.desc}</Text>
         <RadioButton
          animation={'bounceIn'}
          isSelected={true}
          onPress={() => doSomething('hello')}
        />
        <RadioButton
          animation={'bounceIn'}
          isSelected={true}
          onPress={() => doSomething('hello')}
        />
        <RadioButton
          animation={'bounceIn'}
          isSelected={true}
          onPress={() => doSomething('hello')}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default MultipleChoice;