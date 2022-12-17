import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ROUTES} from './src/constants/routes';
import {HomeScreen} from './src/screens/HomeScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
