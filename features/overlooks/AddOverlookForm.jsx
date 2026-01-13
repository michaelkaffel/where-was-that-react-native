import { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button, Platform } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddOverlookForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [dateVisited, setDateVisited] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowCalendar(Platform.OS === 'ios');
        setDateVisited(currentDate)
    };

    const handleSubmit = () => {
        const newComment = {
            title,
            description,
            location,
            dateVisited: dateVisited.toISOString('en-US')
        }
        console.log(title, description, location, dateVisited)
        
    }

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setLocation('');
        setDateVisited(new Date());
    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Input
                    placeholder='Name of Overloon'
                    leftIcon={
                        <Icon
                            name='road'
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
                    placeholder='Describe your overlook...'
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
                        color='#558453ff'
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
                <View style={{margin: 10}}>
                <Button
                    title='Submit'
                    color='#558453ff'
                    onPress={() => {
                        handleSubmit();
                        resetForm();
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
    }
});

export default AddOverlookForm;