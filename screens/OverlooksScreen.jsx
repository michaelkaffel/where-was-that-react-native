import { useSelector, useDispatch } from "react-redux";
import { FlatList, Button, View } from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import { removeOverlook, toggleFavoriteOverlook } from "../features/overlooks/overlooksSlice";
import { getImageSource } from "../utils/getImageSource";

const OverlooksScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const overlooks = useSelector((state) => state.overlooks.overlooksArray).toReversed();

    const renderOverlook = ({ item: overlook }) => {
        return (
            <ListItem
                key={overlook.id}
                onPress={() =>
                    navigation.navigate('OverlookInfo', { overlookId: overlook.id })
                }
            >
                <Avatar source={getImageSource(overlook.image)} rounded />
                <ListItem.Content>
                    <ListItem.Title>{overlook.title}</ListItem.Title>
                    <ListItem.Subtitle>{overlook.location}</ListItem.Subtitle>
                </ListItem.Content>
                <Icon
                    name={overlook.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#da0e0e'
                    onPress={() => {
                        dispatch(toggleFavoriteOverlook(overlook.id))
                    }}
                />
                <Icon
                    name='trash-o'
                    type='font-awesome'
                    color='black'
                    onPress={() => {
                        dispatch(removeOverlook(overlook));
                    }}
                />
            </ListItem>
        );
    };

    return (
        <>
            <View style={{ margin: 15 }}>
                <Button
                    title='Add Overlooks'
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
                data={overlooks}
                renderItem={renderOverlook}
                keyExtractor={(item) => item.id.toString()}
            />
        </>
    );
};

export default OverlooksScreen;