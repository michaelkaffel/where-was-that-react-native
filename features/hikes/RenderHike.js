import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderHike = ({ hike }) => {
    if (hike) {
        return (
            <Card>
                <Text>{hike.title}</Text>
            </Card>
        )
    }

    return <View />
};

export default RenderHike;