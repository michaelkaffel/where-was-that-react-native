import { useSelector } from "react-redux";
// import { useState } from "react";
import { FlatList, Button, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
// import { HIKES } from "../shared/HIKES";

const HikesScreen = ({ navigation }) => {
    // const [hikes, setHikes] = useState(HIKES);

    const hikes = useSelector((state) => state.hikes.hikesArray);

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