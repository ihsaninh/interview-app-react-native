import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { CheckBox} from "react-native-elements"

class MultipleChoice extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 19, marginBottom: 10 }}>{this.props.number} {this.props.desc}</Text>
        <CheckBox
          center
          title='Makan'
          checked={false}
        />
        <CheckBox
          center
          title='Tidur'
          checked={false}
        />
        <CheckBox
          center
          title='Ngoding'
          checked={false}
        />
        <CheckBox
          center
          title='Minum'
          checked={false}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default MultipleChoice;