import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';

const RNApp = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RNApp);
