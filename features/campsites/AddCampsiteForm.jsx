import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, Platform, Image } from 'react-native';
import { Input, Icon, Button, Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { addCampsite } from './campsitesSlice';
import { getImageSource } from '../../utils/getImageSource';


const AddCampsiteForm = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [dateVisited, setDateVisited] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(false)

    useEffect(() => {
        const isValid =
            title.trim().length > 0 &&
            description.trim().length > 0 &&
            location.trim().length > 0 &&
            !!imageUrl;

        setShowSubmitButton(isValid)
    }, [title, description, location, imageUrl])


    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDateVisited(currentDate)
    };



    const handleSubmit = () => {
        const newCampsite = {
            title,
            description,
            location,
            dateVisited: dateVisited.toISOString('en-US'),
            image: imageUrl
        }

        dispatch(addCampsite(newCampsite))

        console.log(newCampsite)

    };

    const getImageFromCamera = async () => {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

        if (cameraPermission.status === 'granted') {
            const capturedImage = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [16, 9]
            });

            if (capturedImage.assets) {
                console.log(capturedImage.assets[0]);
                setImageUrl(capturedImage.assets[0].uri)
            }
        }
    };

    const getImageFromGallery = async () => {
        const mediaLibraryPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (mediaLibraryPermissions.status === 'granted') {
            const capturedImage = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [16, 9]
            });

            if (capturedImage.assets) {
                setImageUrl(capturedImage.assets[0].uri)
            }
        }
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setLocation('');
        setDateVisited(new Date());
        setImageUrl(null)
    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Input
                    placeholder='Name of Campsite'
                    leftIcon={
                        <Icon
                            name='automobile'
                            type='font-awesome'
                        />
                    }
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                />
                <Input
                    placeholder='Nearest City, State'
                    leftIcon={
                        <Icon
                            name='map-marker'
                            type='font-awesome'
                        />
                    }
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(location) => setLocation(location)}
                    value={location}
                />
                <Input
                    placeholder='Describe your campsite...'
                    leftIcon={
                        <Icon
                            name='pencil'
                            type='font-awesome'
                        />
                    }
                    leftIconContainerStyle={{ paddingRight: 10 }}
                    onChangeText={(description) => setDescription(description)}
                    value={description}
                />
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                        Date Visited:
                    </Text>
                    <Button
                        onPress={() => setShowCalendar(!showCalendar)}
                        title={dateVisited.toLocaleDateString('en-US')}
                        buttonStyle={{ backgroundColor: '#558453ff' }}
                        accessibilityLabel='Tap me to select a date'
                    />
                </View>
                {showCalendar && (
                    <DateTimePicker
                        style={styles.datePickerContainer}
                        value={dateVisited}
                        mode='date'
                        display='default'
                        onChange={onDateChange}
                    />
                )}
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                        Image
                    </Text>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            gap: 4
                        }}
                    >
                        <Button
                            title="Camera"
                            buttonStyle={{ backgroundColor: '#558453ff' }}
                            onPress={getImageFromCamera}


                        />
                        <Button
                            title='Gallery'
                            buttonStyle={{ backgroundColor: '#558453ff' }}

                            onPress={getImageFromGallery}

                        />
                    </View>
                </View>
                {imageUrl && (
                    <Card>
                        <Card.Image
                            source={getImageSource(imageUrl)}


                        >

                        </Card.Image>
                    </Card>
                )}
                <View style={{ margin: 10 }}>
                    {showSubmitButton && (<Button
                        title='Submit'
                        onPress={() => {
                            handleSubmit();
                            resetForm();
                        }}
                    />)}
                </View>
                <View style={{ margin: 10 }}>
                    <Button
                        title='See All Campsites'
                        raised
                        
                        buttonStyle={{ backgroundColor: '#aa7804' }}
                        onPress={() => {
                            navigation.navigate('CampsitesScreen');
                        }}

                    />
                </View>
            </ScrollView>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,

        justifyContent: 'flex-start'
    },
    formRow: {

        justifyContent: 'center',

        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1,
    },
    datePickerContainer: {
        marginLeft: 20,
        backgroundColor: '#558453ff'
    }
});

export default AddCampsiteForm;