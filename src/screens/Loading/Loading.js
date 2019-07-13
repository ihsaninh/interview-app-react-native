import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import {globalStyles} from '../../styles/globalStyles'

export default class Loading extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Registration")
        },500)
    }
    render() {
        return (
            <View style={globalStyles.containerTransparent}>
                <ActivityIndicator size={"large"} />
                <Text style={globalStyles.note}>loading</Text>
            </View>
        )
    }
}