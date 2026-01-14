import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { baseUrl } from '../../shared/baseUrl';



const RenderOverlook = ({ overlook }) => {
    if (overlook) {
        return (
            <Card>
                <Card.Title>{overlook.title}</Card.Title>
                <Card.Divider/>
                <Card.Image source={{ uri: baseUrl + overlook.image}}></Card.Image>
                <Text style={styles.location}>{overlook.location}</Text>
                <Text style={styles.description}>{overlook.description}</Text>
            </Card>
        )
    }

    return <View/>
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
});

export default RenderOverlook;