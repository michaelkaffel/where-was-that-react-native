import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderOverlook = ({ overlook }) => {
    if (overlook) {
        return (
            <Card>
                <Text>{overlook.title}</Text>
            </Card>
        )
    }

    return <View/>
};

export default RenderOverlook;