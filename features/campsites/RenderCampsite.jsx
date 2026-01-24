import { useDispatch, useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { toggleFavoriteCampsite } from './campsitesSlice';




const RenderCampsite = ({ campsiteId }) => {

    const dispatch = useDispatch();

    const campsite = useSelector((state) => state.campsites.campsitesArray.find(
        (campsite) => campsite.id === campsiteId
    ))

    if (!campsite) {
        return <View />
    }

    return (
        <Card>
            <Card.Title>{campsite.title}</Card.Title>
            <Card.Divider />
            <Card.Image source={campsite.image}></Card.Image>
            <View style={styles.favLocationRow}>
                <Icon
                    name={campsite.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#da0e0e'
                    onPress={() => {
                        dispatch(toggleFavoriteCampsite(campsite.id));
                    }}
                />
                <Text >{campsite.location}</Text>
            </View>
            <Card.Divider />
            <Text style={styles.description}>{campsite.description}</Text>
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

export default RenderCampsite;