import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import React,{ useState, useEffect} from "react";
import { firebase } from './config';
import Login from "./screen/Login";
import StudentRegistration from "./screen/StudentRegistration"
import StudentDashboard from "./screen/StudentDashboard"
import HomeLogin from "./screen/HomeLogin";
import DriverDashboard from "./screen/DriverDashboard";


const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isStudent, setIsStudent] = useState(false);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    if (user) {
      // User is logged in
      const userId = user.uid;
      
      // Perform actions with the user credentials
      firebase
        .firestore()
        .collection('users')
        .doc(userId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            const email = data.isStudent;
  
            setIsStudent(email)
            // Manipulate the user credentials here
            // Example: Update user data in Firestore or perform any other actions
          } else {
            console.log('User not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching user email:', error);
        });
    }
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
         
          <>
          {isStudent ?
            // show screen after login if the user isTeacher
              <Stack.Group>
              <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
              </Stack.Group> 
           : 
           // show screen after login if the user isTeacher
                <Stack.Group>
                <Stack.Screen name="DriverDashboard" component={DriverDashboard} />
                </Stack.Group> 
                }
          </>
      
      
      ) : (
          // Auth screens
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeLogin" component={HomeLogin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="StudentRegistration" component={StudentRegistration} />
          </Stack.Group>
        )}
        {/* Common modal screens */}
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
