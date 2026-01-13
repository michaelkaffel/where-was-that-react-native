import { Text, Button, Tile, Card } from "react-native-elements";
import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderImage from '../assets/images/IMG_5647.jpeg';




const HomeScreen = () => {
    return (


        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Where Was</Text>
                <Text style={styles.headerTitle}>That?</Text>
            </View>
            <Card >
                <Card.Image style={{ height: 300 }} source={HeaderImage}></Card.Image>
            </Card>
            <View style={styles.headerContainer}>

                <Text style={styles.headerCaption}>Don't lose track of all your favorite hiking trails, camping spots, and scenic overlooks.</Text>
            </View>





            {/* <Image
                    style={styles.image}
                    source={HeaderImage}
                /> */}

            {/* <Tile
                    imageSrc={HeaderImage}
                    title="Where Was That"
                    titleStyle={{ color: 'black', fontSize: 30, fontWeight: 900 }}
                    featured={true}
                    caption="Don't lose track of all your favorite hiking trails, camping spots, and scenic overlooks."
                    captionStyle={{ color: 'white', backgroundColor: 'grey', borderRadius: 7, padding: 10 }}
                /> */}
            {/* <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='Hikes' />
                    <Button style={styles.button} title='Campsites' />
                    <Button style={styles.button} title='Overlooks' />
                </View> */}
        </ScrollView>




    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',


    },
    headerContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    headerTitle: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'left',

    },
    headerCaption: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
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

export default HomeScreen;