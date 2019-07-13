import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Icon, Button } from 'react-native-elements'

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Icon
            name="home"
            type="foundation"
            color="grey"
            size={50}
          />
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 20 }}>Welcome to PT. Mencari Jomblo Sejati</Text>

          <Text style={{ paddingVertical: 20 }}>Instruksi Pengerjaan:</Text>
          <Text>1. Kerjakan soal dengan Tenang</Text>
          <Text>2. Kerjakan soal dengan Santuy</Text>
          <Text>3. Kerjakan soal dengan Kalem</Text>
        </View>
        <Button
        containerStyle={{marginTop: 30}}
          buttonStyle={{
            margin: 30,
            marginTop: 10,
            backgroundColor: 'blue',
            borderRadius: 50
          }}
          titleStyle={{
            color: 'white',
            fontWeight: '500',
            fontSize: 16
          }}
          title="Mulai Tes"
          onPress={() => this.props.navigation.navigate('Interview')}
        />
      </View>
    );
  }
}