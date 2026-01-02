import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from "../shared/CAMPSITES";

const CampsitesScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    const renderDirectoryItem = ({ item: campsite }) => {
        return (
            <ListItem
                key={campsite.id}
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
            >
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.title}</ListItem.Title>
                    <ListItem.Subtitle>
                        {campsite.location}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    };

    return (
        <FlatList 
            data={campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default CampsitesScreen;