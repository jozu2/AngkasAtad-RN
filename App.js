import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeLogin from "./screen/Login/HomeLogin";
import StudentLogin from "./screen/Login/StudentLogin";
import StudentRegistration from "./screen/Login/StudentRegistration";
import DriverLogin from "./screen/Login/DriverLogin";
import DriverRegistration from "./screen/Login/DriverRegistration";
import StudentDashboard from "./screen/StudentDashboard/StudentDashboard";
import DriverDashboard from "./screen/DriverDashboard/DriverDashboard";

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Group>
            <Stack.Screen name="HomeLogin" component={HomeLogin} />
            <Stack.Screen name="StudentLogin" component={StudentLogin} />
            <Stack.Screen name="StudentRegistration" component={StudentRegistration} />
            <Stack.Screen name="DriverLogin" component={DriverLogin} />
            <Stack.Screen name="DriverRegistration" component={DriverRegistration} />
          </Stack.Group>

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        </Stack.Group>
  

             <Stack.Group>
              <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
              </Stack.Group> 

                <Stack.Group>
                <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
                </Stack.Group> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
