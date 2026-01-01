import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Constants from "expo-constants";
import HomeScreen from './HomeScreen';
import CampsitesScreen from "./CampsitesScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#157a2cff'}
};

const HomeNavigator = () => {
    const Stack = createDrawerNavigator()

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const CampsitesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Campsites'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Campsites'
                component={CampsitesScreen}
                options={{ title: 'Campsites' }}
            />
            
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingtop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
            }}
        >
            <Drawer.Navigator
                initialRouteName="HomeNav"
                screenOptions={{
                    drawerStyle: { backgroundColor: '#60b56eff'},
                    headerShown: true,
                    swipeEdgeWidth: 200
                }}
            >
                <Drawer.Screen 
                    name='HomeNav'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        headerShown: true
                    }}
                />
                <Drawer.Screen 
                    name='CampsitesScreen'
                    component={CampsitesNavigator}
                    options={{
                        title: 'Campsites',
                        headerShown: true
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

export default Main;

