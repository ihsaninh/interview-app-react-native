import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerStyle: {
      backgroundColor: '#6a69e2'
    },
    headerLeft: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 16
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Icon name="av-timer" type="material-icon" color="grey" size={50} />
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 20 }}>
            Welcome to PT. Mencari Jomblo Sejati
          </Text>

          <Text style={{ paddingVertical: 20 }}>Instruksi Pengerjaan:</Text>
          <Text style={styles.rule}>1. Kerjakan soal dengan Tenang</Text>
          <Text style={styles.rule}>2. Kerjakan soal dengan Santuy</Text>
          <Text style={styles.rule}>3. Kerjakan soal dengan Kalem</Text>
        </View>
        <Button
          containerStyle={{ marginTop: 30 }}
          buttonStyle={{
            margin: 30,
            marginTop: 10,
            backgroundColor: '#504fbd',
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

const styles = StyleSheet.create({
  rule: {
    paddingBottom: 5,
    fontSize: 16
  }
});
