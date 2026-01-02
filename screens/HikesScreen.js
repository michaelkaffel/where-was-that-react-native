import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { HIKES } from "../shared/HIKES";

const HikesScreen = ({ navigation }) => {
    const [hikes, setHikes] = useState(HIKES);

    const renderHike = ({ item: hike }) => {
        return (
            <ListItem
                key={hike.id}
                onPress={() =>
                    navigation.navigate('HikeInfo', { hike })
                }
            >
                <Avatar source={hike.image} rounded />
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
        <FlatList 
            data={hikes}
            renderItem={renderHike}
            keyExtractor={(item) => item.id.toString()}
        />
    )
    
};

export default HikesScreen;