import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { toggleFavoriteOverlook } from './overlooksSlice';
import { getImageSource } from '../../utils/getImageSource';



const RenderOverlook = ({ overlookId }) => {

    const dispatch = useDispatch();

    const overlook = useSelector((state) => state.overlooks.overlooksArray.find(
        (overlook) => overlook.id === overlookId
    ))

    if (!overlook) {
        return <View />
    }

    return (
        <Card>
            <Card.Title>{overlook.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={getImageSource(overlook.image)}></Card.Image>
            <View style={styles.favLocationRow}>
                <Icon 
                    name={overlook.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#da0e0e'
                    onPress={() => {
                        dispatch(toggleFavoriteOverlook(overlook.id))
                    }}
                />
                <Text>{overlook.location}</Text>
            </View>
            <Card.Divider />
            <Text style={styles.description}>{overlook.description}</Text>
        </Card>
    )



};

const styles = StyleSheet.create({
    description: {
        marginTop: 5,
        fontSize: 20,
    },
    favLocationRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    }
});

export default RenderOverlook;