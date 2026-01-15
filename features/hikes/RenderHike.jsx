import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { baseUrl } from '../../shared/baseUrl';

const RenderHike = ({ hike }) => {
    if (hike) {
        return (
            <Card>
                <Card.Title>{hike.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: baseUrl + hike.image }}></Card.Image>
                <Text style={styles.location}>{hike.location}</Text>
                <Text style={styles.description}>{hike.description}</Text>
            </Card>
        )
    }

    return <View />
};

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

export default RenderHike;