import { Platform, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Constants from "expo-constants";
import HomeScreen from './HomeScreen';
import AddLocationsScreen from "./AddLocationsScreen";
import CampsitesScreen from "./CampsitesScreen";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import HikesScreen from "./HikesScreen";
import HikeInfoScreen from "./HikeInfoScreen";
import OverlooksScreen from "./OverlooksScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#666db7ff',
    headerStyle: {backgroundColor: '#adbbb0ff'},
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

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

const AddLocationsNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='AddLocations'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='AddLocations'
                component={AddLocationsScreen}
                options={{ 
                    headerShown: false,
                    title: 'Add Locations' }}
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
            <Stack.Screen 
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.title
                })}
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
            <Stack.Screen 
                name='HikeInfo'
                component={HikeInfoScreen}
                options={({ route }) => ({
                    title: route.params.hike.title
                })}
            />
        </Stack.Navigator>
    )
}


const OverlooksNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Overlooks"
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Overlooks'
                component={OverlooksScreen}
                options={{
                    headerShown: false,
                    title: 'Overlooks'
                }}
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
                    drawerStyle: { backgroundColor: '#769059ff'},
                    drawerActiveTintColor: '#234a07ff',
                    drawerLabelStyle: { color: '#fff'},
                    headerStyle: {backgroundColor: '#558453ff'},
                    headerTitleStyle: { color: '#fff'},
                    headerShown: true,
                    swipeEdgeWidth: 200
                }}
            >
                <Drawer.Screen 
                    name='HomeNav'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        
                    }}
                />
                <Drawer.Screen 
                    name='AddLocationsScreen'
                    component={AddLocationsNavigator}
                    options={{
                        title: 'Add New Locations'
                    }}
                />
                <Drawer.Screen 
                    name='CampsitesScreen'
                    component={CampsitesNavigator}
                    options={{
                        title: 'Your Campsites',
                        headerShown: true
                    }}
                />
                <Drawer.Screen 
                    name='HikesScreen'
                    component={HikesNavigator}
                    options={{
                        title: 'Your Hikes',
                        
                    }}
                />
                <Drawer.Screen 
                    name='OverlooksScreen'
                    component={OverlooksNavigator}
                    options={{
                        title: 'Your Overlooks'
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

export default Main;

