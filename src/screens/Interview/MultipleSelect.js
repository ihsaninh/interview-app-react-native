import React, { Component } from 'react';
import { View, Text} from 'react-native';
import SelectMultiple from 'react-native-select-multiple'

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selected: 0,
      selectedItems: [],
      choice: []
    };
  }

  componentDidMount() {
    let choice = []
    this.setState({
      choice: choice
    })
    this.props.options.split(',').map((item, key) => {
      choice.push({label: item, value: key})
    })
      
  }

  onSelectionsChange = (selectedItems) => {
    let selected = ""
    this.setState({
      selectedItems
    })
    selectedItems.map(item => {
      selected += item.label + ","
    })
    this.props.changeState('answer', selected)
  }
  render() {
    return (
      <View>
        <Text style={{ fontSize: 19, marginBottom: 10 }}>{this.props.number}. {this.props.desc}</Text>
        <View>
        <SelectMultiple
          items={this.state.choice}
          selectedItems={this.state.selectedItems}
          onSelectionsChange={this.onSelectionsChange} />
      </View>
    </View>
    );
  }
}

export default MultipleChoice;