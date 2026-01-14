import { useSelector } from "react-redux";
// import { useState } from "react";
import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import { baseUrl } from "../shared/baseUrl";
// import { CAMPSITES } from "../shared/CAMPSITES";

const CampsitesScreen = ({ navigation }) => {
    // const [campsites, setCampsites] = useState(CAMPSITES);

    const campsites = useSelector((state) => state.campsites.campsitesArray)

    const renderCampsite = ({ item: campsite }) => {
        return (
            <ListItem
                key={campsite.id}
                onPress={() =>
                    navigation.navigate('CampsiteInfo', { campsite })
                }
            >
                <Avatar source={{ uri: baseUrl + campsite.image}} rounded />
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
            renderItem={renderCampsite}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default CampsitesScreen;