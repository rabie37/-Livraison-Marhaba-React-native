import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardScreen from './components/OnBoardScreen';
import DetailsScreen from './components/DetailsScreen';
import Register from './components/RegisterScreen';
import BottomNavigator from './navigation/BottomNavigator';
import Login from './components/LoginScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Login" component={Login} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}

