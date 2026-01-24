import { useSelector, useDispatch } from "react-redux";
import { FlatList, Button, View } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { toggleFavoriteHike } from "../features/hikes/hikesSlice";


const HikesScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const hikes = useSelector((state) => state.hikes.hikesArray).toReversed();


    const renderHike = ({ item: hike }) => {
        return (
            <ListItem
                key={hike.id}
                onPress={() =>
                    navigation.navigate('HikeInfo', { hikeId: hike.id })
                }
            >
                <Avatar source={hike.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{hike.title}</ListItem.Title>
                    <ListItem.Subtitle>
                        {hike.location}
                    </ListItem.Subtitle>
                </ListItem.Content>
                <Icon 
                    name={hike.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#da0e0e'
                    onPress={() => {
                        dispatch(toggleFavoriteHike(hike.id))
                    }}
                />
            </ListItem>
        );
    };

    return (
        <>
            <View style={{ margin: 15 }}>
                <Button
                    title='Add Hikes'
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
                data={hikes}
                renderItem={renderHike}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    )

};

export default HikesScreen;