import { Text, View } from 'react-native';
import { Card, Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    location: {
        textAlign: 'right',
        marginTop: 5,
    },
    description: {
        marginTop: 5,
        fontSize: 20,
    }
})

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card>
                <Card.Title>{campsite.title}</Card.Title>
                <Card.Divider/>
                <Card.Image source={campsite.image}></Card.Image>
                <Text style={styles.location}>{campsite.location}</Text>
                <Text style={styles.description}>{campsite.description}</Text>
            </Card>
        )
    }

    return <View/>
};

export default RenderCampsite;