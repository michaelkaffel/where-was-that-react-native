import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Switch, Button, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
// import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddCampsitesForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [dateVisited, setDateVisited] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS ==='ios');
        setDateVisited(currentDate)
    };

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
                        color='#63b25a'
                        accessibilityLabel='Tap me to select a reservation date'
                    />
                </View>
                {showCalendar && (
                    <DateTimePicker
                        style={styles.formItem}
                        value={dateVisited}
                        mode='date'
                        display='default'
                        onChange={onDateChange}
                    />
                )}

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
        flex: 1
    },
});

export default AddCampsitesForm;