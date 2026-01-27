import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { toggleFavoriteHike } from './hikesSlice';
import { getImageSource } from '../../utils/getImageSource';

const RenderHike = ({ hikeId }) => {

    const dispatch = useDispatch()

    const hike = useSelector((state) => state.hikes.hikesArray.find(
        (hike) => hike.id === hikeId
    ))

    if (!hike) {
        return  <View />
    }

    return(
            <Card>
                <Card.Title>{hike.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={getImageSource(hike.image)}></Card.Image>
                <View
                    style={styles.favLocationRow}
                >
                    <Icon 
                        name={hike.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#da0e0e'
                        onPress={() => {
                            dispatch(toggleFavoriteHike(hike.id))
                        }}
                    />
                    <Text>{hike.location}</Text>
                </View>
                <Card.Divider />
                <Text style={styles.description}>{hike.description}</Text>
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
})

export default RenderHike;