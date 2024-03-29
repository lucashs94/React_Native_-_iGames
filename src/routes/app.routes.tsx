import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Categories } from '../screens/Categories';
import { Search } from '../screens/Search';
import { Favorites } from '../screens/Favorites';
import { Detail } from '../screens/Detail';

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Screen
        name='home'
        component={Home}
      />

      <Screen
        name='detail'
        component={Detail}
      />

      <Screen
        name='categories'
        component={Categories}
      />

      <Screen
        name='search'
        component={Search}
      />

      <Screen
        name='favorites'
        component={Favorites}
      />

    </Navigator>
  );
}