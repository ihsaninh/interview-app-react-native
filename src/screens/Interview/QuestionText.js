import React from 'react'
import {View, TextInput, Text } from  'react-native'

export default class QuestionText extends React.Component {
  render() {
    return (
        <View>
          <Text style={{ fontSize: 19, marginBottom: 10 }}>{this.props.number}. {this.props.desc}</Text>
          <TextInput
            multiline={true}
            numberOfLines={7}
            style={{ borderRadius: 10, borderColor: "gray", borderWidth: 1 }}
            onChangeText={text =>
              this.props.changeState('answer', text)
          }
          />
        </View>
      )
  }
}