import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import React,{ useState, useEffect} from "react";
import { firebase } from './config';
import Login from "./screen/Login";
import Registration from "./screen/Registration"
import Dashboard from "./screen/Dashboard"


const Stack = createStackNavigator();

function App(){

      const [initializing, setInitializing] = useState(true);
      const [user, setUser] = useState();
      console.log(user)
      function onAuthStateChanged(user){
        setUser(user);
        if(initializing) setInitializing(false);
      }

      useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      },[]);

      if(initializing) return null;

        if(!user){
          return(
            <Stack.Navigator>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Registration" component={Registration}/>
            </Stack.Navigator>
          )
        }
  return(
    <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard}/>
  </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}