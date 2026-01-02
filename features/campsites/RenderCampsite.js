import { Text, View } from 'react-native';
import { Card } from 'react-native-elements'

const RenderCampsite = ({ campsite }) => {
    if (campsite) {
        return (
            <Card>
                <Text>{campsite.title}</Text>
            </Card>
        )
    }

    return <View/>
};

export default RenderCampsite;