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
                <View style={styles.container}>
                    <LinearGradient colors={['#8685ff', '#34338f']} style={styles.gradientContainer}>
                        <StatusBar
                            backgroundColor="#504fbd"
                            barStyle="light-content"
                        />
                        <View style={styles.headerContainer}>
                            <View style={(this.state.focused) ? styles.titleHide : styles.title }>
                                 <Icon
                                    name="home-city"
                                    type="material-community"
                                    color="#f0f0f0"
                                    size={60}
                                /> 
                                <Text
                                    style={styles.appTitle}>
                                    InterView Apps
                                </Text>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <TextInput
                                onFocus={this.onFocusChange}
                                selectionColor={'#f0f0f0'}
                                style={styles.inputStyle}
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
                                style={styles.inputStyle}
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
                                style={styles.inputStyle}
                                placeholderTextColor={'#f0f0f0'}
                                placeholder="Phone Number"
                                keyboardType="numeric"
                                onChangeText={inputPhone =>
                                    this.setState({ inputPhone })
                                }
                                value={this.state.inputPhone}
                            />
                            <Button
                                buttonStyle={styles.btnStyle}
                                titleStyle={styles.btnTitleStyle}
                                title="Masuk ke Dashboard"
                                onPress={this.handleRegister}
                            />
                        </View>
                    </LinearGradient>
                </View>
            )
        }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        height: '30%', 
        justifyContent: 'center' 
    },
    title: {
        marginTop: '15%'
    },
    titleHide: {
        marginTop: '15%', 
        display: 'none'  
    },
    gradientContainer: {
        flex: 1
    },
    appTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
        color: '#f0f0f0',
        fontWeight: '500',
        marginTop: 10
    },
    formContainer: {
        height: '60%', 
        justifyContent: 'center'
    },
    inputStyle: {
        height: 40,
        borderColor: '#f0f0f0',
        borderWidth: 2,
        color: '#f0f0f0',
        borderRadius: 10,
        paddingLeft: 20,
        fontWeight: '500',
        marginHorizontal: 30,
        marginBottom: 20
    },
    btnStyle: {
        margin: 30,
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 50
    },
    btnTitleStyle: {
        color: '#504fbd',
        fontWeight: '500',
        fontSize: 16
    }    

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