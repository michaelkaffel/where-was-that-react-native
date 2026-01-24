import { useDispatch } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../../shared/baseUrl';
import { patchFavCampsite } from './campsitesSlice';




const RenderCampsite = ({ campsite }) => {

    const dispatch = useDispatch();

    if (campsite) {
        return (
            <Card>
                <Card.Title>{campsite.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: baseUrl + campsite.image }}></Card.Image>
                <View style={styles.favLocationRow}>
                    <Icon 
                        name={campsite.favorite ? 'heart' : 'heart-o'}
                                            type='font-awesome'
                                            color='#da0e0e'
                                            onPress={() => {
                                                dispatch(patchFavCampsite(campsite));
                                            }}
                    />
                    <Text >{campsite.location}</Text>
                </View>
                <Text style={styles.description}>{campsite.description}</Text>
            </Card>
        )
    }

    return <View />
};

const styles = StyleSheet.create({
    description: {
        marginTop: 5,
        fontSize: 20,
    },
    favLocationRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',   
        marginTop: 20,
             
    }
});

export default RenderCampsite;