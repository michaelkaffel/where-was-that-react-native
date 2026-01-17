import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
import { FlatList, Button, View } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
import { selectAllHikes, toggleFavoriteHike } from "../features/hikes/hikesSlice";
// import { HIKES } from "../shared/HIKES";

const HikesScreen = ({ navigation }) => {
    // const [hikes, setHikes] = useState(HIKES);
    const dispatch = useDispatch();

    const hikes = useSelector((state) => state.hikes.hikesArray).toReversed();


    const renderHike = ({ item: hike }) => {
        return (
            <ListItem
                key={hike.id}
                onPress={() =>
                    navigation.navigate('HikeInfo', { hike })
                }
            >
                <Avatar source={{ uri: baseUrl + hike.image }} rounded />
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