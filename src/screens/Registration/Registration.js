import React, { Component, Fragment } from 'react'
import { StyleSheet, View, Text, TextInput, StatusBar, Keyboard, ActivityIndicator
} from 'react-native'
import { Button } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import {withNavigation} from 'react-navigation';
import * as actionInterview from '../../redux/actions';
import { connect } from 'react-redux';

class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputUsername: '',
            inputEmail: '',
            inputPhone: '',
            focused: false,
        }
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    onFocusChange = () => {
        this.setState({
            focused: true
        });
    }

    keyboardDidHide = () => {
        Keyboard.dismiss();
        this.setState({
            focused: false
        })
    }
    handleRegister = async () => {
        if( this.state.inputUsername=="" || this.state.inputEmail=="" || this.state.inputPhone=="") {
          alert("Tidak ada yang boleh kosong")  
        }else{ 
          const register = this.props.registration({ name: this.state.inputUsername, email: this.state.inputEmail, phone_number: this.state.inputPhone })
          if (register){
            this.props.navigation.navigate('Home')
          }
      }
    
      }

    render() {
            return (
                <View style={{ flex: 1 }}>
                    <LinearGradient colors={['#eea849', '#f46b45']} style={{ flex: 1 }}>
                        <StatusBar
                            backgroundColor="#d99943"
                            barStyle="light-content"
                        />
                        <View style={{ height: '30%', justifyContent: 'center' }}>
                            <View style={(this.state.focused) ? { marginTop: '15%', display: 'none' } : { marginTop: '15%' }}>
                                 <Icon
                                    name="home-city"
                                    type="material-community"
                                    color="#f0f0f0"
                                    size={60}
                                /> 
                                <Text
                                    style={{
                                        fontSize: 30,
                                        textAlign: 'center',
                                        marginBottom: 40,
                                        color: '#f0f0f0',
                                        fontWeight: '500',
                                        marginTop: 10
                                    }}>
                                    InterView Apps
                                </Text>
                            </View>
                        </View>
                        <View style={{ height: '60%', justifyContent: 'center' }}>
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    color: '#f0f0f0',
                                    borderRadius: 10,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Username"
                                onChangeText={input =>
                                    this.setState({ inputUsername: input })
                                }
                                value={this.state.inputUsername}
                            />
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    color: '#f0f0f0',
                                    borderRadius: 10,
                                    paddingLeft: 20,
                                    marginTop: 20,
                                    fontWeight: '500',
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Email Address"
                                onChangeText={inputEmail =>
                                    this.setState({ inputEmail })
                                }
                                value={this.state.inputEmail}
                            />
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={{
                                    height: 40,
                                    color: '#f0f0f0',
                                    borderColor: '#f0f0f0',
                                    borderWidth: 2,
                                    borderRadius: 10,
                                    paddingLeft: 20,
                                    fontWeight: '500',
                                    margin: 20,
                                    marginHorizontal: 30
                                }}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Phone Number"
                                onChangeText={inputPhone =>
                                    this.setState({ inputPhone })
                                }
                                value={this.state.inputPhone}
                            />
                            <Button
                                buttonStyle={{
                                    margin: 30,
                                    marginTop: 10,
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: 50
                                }}
                                titleStyle={{
                                    color: '#f46b45',
                                    fontWeight: '500',
                                    fontSize: 16
                                }}
                                title="Mulai Tes"
                                onPress={this.handleRegister}
                            />
                        </View>
                        <View style={{ height: '10%' }}>
                            <View
                                style={(this.state.focused) ? { alignItems: 'center', marginTop: 20, display: 'none' } : { alignItems: 'center', marginTop: 20 }}>
                            </View>
                        </View>
                    </LinearGradient>
                </View>
            )
        }
}

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        registration: (value) => dispatch(actionInterview.registration(value))
    }
  }

export default withNavigation(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Registration));