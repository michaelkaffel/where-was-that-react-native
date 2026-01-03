import { Text, Image, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderImage from '../assets/images/IMG_5647.jpeg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        borderWidth: 2,
        
    },
    headerTitle: {
        fontSize: 48,
        marginTop: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    image: {
        width: '440',
        height: '350',
        resizeMode: 'contain'
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        gap: 70
    },
    
})


const HomeScreen = () => {
    return (

        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={styles.headerTitle}>Where Was That?</Text>
                
                <Image
                    style={styles.image}
                    source={HeaderImage}
                />
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='Hikes' />
                    <Button style={styles.button} title='Campsites' />
                    <Button style={styles.button} title='Overlooks' />
                </View>

            </SafeAreaView>
        </SafeAreaProvider >

    )
};

export default HomeScreen;