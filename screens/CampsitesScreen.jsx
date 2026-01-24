import { useSelector, useDispatch } from "react-redux";
import { FlatList, Button, View } from "react-native";
import { Avatar, ListItem, Icon } from 'react-native-elements';
import { toggleFavoriteCampsite } from "../features/campsites/campsitesSlice";

const CampsitesScreen = ({ navigation }) => {
    // const [campsites, setCampsites] = useState(CAMPSITES);
    const dispatch = useDispatch()

    const campsites = useSelector((state) => state.campsites.campsitesArray).toReversed();
    

    const renderCampsite = ({ item: campsite }) => {
        return (


            <ListItem
                key={campsite.id}
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsiteId: campsite.id })
                }
            >
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.title}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.location}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                    name={campsite.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#da0e0e'
                    onPress={() => {
                        dispatch(toggleFavoriteCampsite(campsite.id));
                    }}
                />
            </ListItem>

        )
    };

    return (
        <>
            <View style={{ margin: 15 }}>
                <Button
                    title='Add Campsites'
                    raised
                    color='#aa7804'
                    style={{ margin: 15 }}
                    onPress={() => {
                        navigation.navigate('AddLocationsScreen');
                        
                    }
                    }

                />
            </View>
            <FlatList
                data={campsites}
                renderItem={renderCampsite}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    );
};

export default CampsitesScreen;