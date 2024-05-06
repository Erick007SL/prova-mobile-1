import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// telas
import Home from "./src/telas/Home";
import Login from "./src/telas/Login";
import Registrar from "./src/telas/Registrar";
import FichaUsuario from "./src/telas/FichaUsuario";
// usestate e usefect
import { onAuthStateChanged } from "firebase/auth";
// import { UserInfo } from "firebase/auth"
import { auth } from "./src/config/firebase";
import { ActivityIndicator, View } from "react-native";
import TabNavigator from "./src/component/TabNavigator";
import StackNavigator from "./src/component/StackerNavigator";
//

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      // console.log( 'user: ',_user);
      setUser(_user);
      if (initializing) {
        setInitializing(false);
        setUser(null);
      }
    });
    return unsubscribe;
  }, [user]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color={"red"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <StackNavigator />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;
