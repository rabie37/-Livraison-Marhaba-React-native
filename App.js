import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './components/reducers'
import {persistStore,persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';



// Componenets

import OnBoardScreen from './components/OnBoardScreen';
import DetailsScreen from './components/DetailsScreen';
import Register from './components/RegisterScreen';
import BottomNavigator from './navigation/BottomNavigator';
import Login from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';



const Stack = createNativeStackNavigator();
const persistedReducer = persistReducer({key: 'persist-key', storage: AsyncStorage }, allReducers);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const persistor = persistStore(store);

export default function App() {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <NavigationContainer>
      <StatusBar backgroundColor={'#000'} barStyle="dark-content" />
      <Stack.Navigator initialRouteName="BoardScreen">
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} options={{ headerShown: false }} />
        <Stack.Screen  name="Home" component={BottomNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
     </Provider>
  )
}

