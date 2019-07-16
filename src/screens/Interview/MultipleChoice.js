import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { CheckBox} from "react-native-elements"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      choice : [],
      selected: 0
    };
  }

  async componentDidMount() {
    let choice = []
    await this.props.options.split(',').map((item, key) => {
      choice.push({label: item, value: key})
    })
    this.setState({
      choice: choice
    })
  }

  radioClick = selected => {
    this.setState({
      selected: selected
    })

    this.props.changeState('answer', this.state.choice[selected].label)
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 19, marginBottom: 10 }}>{this.props.number}. {this.props.desc}</Text>
        <View>
        <RadioForm
          radio_props={this.state.choice}
          initial={0}
          onPress={(selected) => {this.radioClick(selected)}}
        />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default MultipleChoice;