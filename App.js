import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Homepage from "./src/Homepage";
import Homescreen from "./src/Tabs/Homescreen";
import BottomTabs from "./src/Tabs/Tabs";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "sfbold": require('./assets/Edu_VIC_WA_NT_Hand/static/EduVICWANTHand-Bold.ttf'),
    "sfmedium": require('./assets/Edu_VIC_WA_NT_Hand/static/EduVICWANTHand-Medium.ttf'),
    "sfregular": require('./assets/Edu_VIC_WA_NT_Hand/static/EduVICWANTHand-Regular.ttf'),
    "sfsemibold": require('./assets/Edu_VIC_WA_NT_Hand/static/EduVICWANTHand-SemiBold.ttf'),
    "coderegular":require('./assets/Source_Code_Pro/static/SourceCodePro-Black.ttf'),
    "codelight":require('./assets/Source_Code_Pro/static/SourceCodePro-Light.ttf')
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>)
}