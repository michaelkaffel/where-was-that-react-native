import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Constants from "expo-constants";
import HomeScreen from './HomeScreen';
import CampsitesScreen from "./CampsitesScreen";
import HikesScreen from "./HikesScreen";

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
                options={{ 
                    headerShown: false,
                    title: 'Home' }}
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
                options={{ 
                    headerShown: false,
                    title: 'Campsites' }}
            />
            
        </Stack.Navigator>
    );
};

const HikesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Hikes'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Hikes'
                component={HikesScreen}
                options={{ 
                    headerShown: false,
                    title: 'Hikes' }}
            />
        </Stack.Navigator>
    )
}

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
                        title: 'Homes',
                        
                    }}
                />
                <Drawer.Screen 
                    name='CampsitesScreen'
                    component={CampsitesNavigator}
                    options={{
                        title: 'Campsites',
                        
                    }}
                />
                <Drawer.Screen 
                    name='HikesScreen'
                    component={HikesNavigator}
                    options={{
                        title: 'Hikes',
                        
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

export default Main;

