import React, { Component } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Registration")
        },500)
    }
    render() {
        return (
            <View style={styles.containerTransparent}>
                <ActivityIndicator size={"large"} />
                <Text style={styles.note}>loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    containerTransparent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.4)',
        position : 'absolute',
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    note: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });