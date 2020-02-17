import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import RootNavigation from './src/navigations/RootNavigation';
import { store, persistor } from './src/redux/store';

const AppNav = createReduxContainer(RootNavigation, 'root');
const mapStateToProps = state => ({
  state: state.router
});
const AppWithNavigationState = connect(mapStateToProps)(AppNav);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
