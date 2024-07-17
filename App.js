import 'react-native-gesture-handler';
import { Platform,  View } from "react-native";
import { Context } from "./context/Context";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Scanner from "./components/Scanner";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 10,
    height: 60,
    backgroundColor: "#e9f1fa",
  },
};

export default function App() {
  return (
    <Context>
      <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Entypo name="home" size={24} color="#005d5d" />
                </View>
              ),
            }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#005d5d",
                    width: Platform.OS === "ios" ? 50 : 60,
                    height:Platform.OS==="ios"? 50 : 60,
                    top:Platform.OS==="ios"? -20 : -30,
                    borderRadius:100
                  }}
                >
                  <Entypo name="chat" size={24} color="white" />
                </View>
              ),
            }}
            name="Chat"
            component={Chat}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <MaterialIcons
                    name="qr-code-scanner"
                    size={24}
                    color="#005d5d"
                  />
                </View>
              ),
            }}
            name="Scanner"
            component={Scanner}
          />
        </Tab.Navigator>

        {/* <Stack.Navigator screenOptions={{}} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator> */}
      </NavigationContainer>
      </GestureHandlerRootView>
    </Context>
  );
}
