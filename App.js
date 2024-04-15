import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// telas
import Home from "./src/telas/Home";
import Login from "./src/telas/Login";
import Registrar from "./src/telas/Registrar";

//  configurar 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Registrar" component={Registrar} />
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>      
    </NavigationContainer>
    
  );
};


export default App;
