import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName='search'
    >

      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='categories'
        component={Categories}
      />

      <Screen
        name='search'
        component={Search}
      />

    </Navigator>
  );
}