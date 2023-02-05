import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './src/constants/routes';
import {HomeScreen} from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
