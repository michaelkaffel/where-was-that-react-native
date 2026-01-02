import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { OVERLOOKS } from "../shared/OVERLOOKS";

const OverlooksScreen = ({ navigation }) => {
    const [overlooks, setOverlooks] = useState(OVERLOOKS);

    const renderOverlook = ({ item: overlook }) => {
        return (
            <ListItem
                key={overlook.id}
                onPress={() => 
                    navigation.navigate('OverlookInfo', { overlook })
                }
            >
                <Avatar source={overlook.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{overlook.title}</ListItem.Title>
                    <ListItem.Subtitle>{overlook.location}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList 
            data={overlooks}
            renderItem={renderOverlook}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default OverlooksScreen;