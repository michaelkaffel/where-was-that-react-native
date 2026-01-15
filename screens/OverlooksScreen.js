import { useSelector } from "react-redux";
// import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { baseUrl } from "../shared/baseUrl";
// import { OVERLOOKS } from "../shared/OVERLOOKS";

const OverlooksScreen = ({ navigation }) => {
    // const [overlooks, setOverlooks] = useState(OVERLOOKS);

    const overlooks = useSelector((state) => state.overlooks.overlooksArray)

    const renderOverlook = ({ item: overlook }) => {
        return (
            <ListItem
                key={overlook.id}
                onPress={() => 
                    navigation.navigate('OverlookInfo', { overlook })
                }
            >
                <Avatar source={{ uri: baseUrl + overlook.image}} rounded />
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