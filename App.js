import React, { Component } from 'react'
import { Provider,connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from "react-native"
import { createReduxContainer } from 'react-navigation-redux-helpers'
import RootNavigation from './src/navigations/RootNavigation'
import { store,persistor } from './src/redux/store'
import { YellowBox } from 'react-native'
const AppNav = createReduxContainer(RootNavigation, 'root')
const mapStateToProps = state => ({
    state : state.router
})
const AppWithNavigationState = connect(mapStateToProps)(AppNav)
class App extends Component {
  render(){
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);
    return (  
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}

export default App