import { Text, View } from 'react-native';
import { Card, Image } from 'react-native-elements'

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card>
                <Card.Title>{campsite.title}</Card.Title>
                <Card.Divider/>
                <Card.Image source={campsite.image}></Card.Image>
                <Text>{campsite.location}</Text>
                <Text>{campsite.description}</Text>
            </Card>
        )
    }

    return <View/>
};

export default RenderCampsite;