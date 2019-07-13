import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"
import Loading from '../screens/Loading/Loading'
import Registration from '../screens/Registration/Registration'
import Home from '../screens/Home/Home'
import Interview from '../screens/Interview/Interview'

const Initial = createStackNavigator({
    Loading: {
        screen: Loading,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    }
})

const App = createStackNavigator({
    Registration: {
        screen : Registration,
        navigationOptions : ({navigation}) => ({
            header: null
        })
    },
    Home: {
        screen : Home,
        navigationOptions : ({navigation}) => ({
            // header: null,
            headerTitle: 'Halaman Dashboard',
        })
    },
     Interview: {
        screen : Interview,
        navigationOptions : ({navigation}) => ({
            header: null,
            // headerTitle: 'Halaman Dashboard',
        })
    },
},
{
    initialRouteName: 'Registration'
})

const RootNavigation = createAppContainer(createSwitchNavigator(
    {
        Initial: Initial,
        App: App
    },
    {

        initialRouteName: 'Initial',
        resetOnBlur: true,
    }
));

export default RootNavigation