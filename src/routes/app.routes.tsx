import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName='categories'
    >

      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='categories'
        component={Categories}
      />

    </Navigator>
  );
}