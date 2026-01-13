import { useState } from "react";
import { View } from "react-native";

import { Tab, TabView, Text } from 'react-native-elements';
import AddCampsiteForm from "../features/campsites/AddCampsiteForm";
import AddHikeForm from "../features/hikes/AddHikeForm";
import AddOverlookForm from "../features/overlooks/AddOverlookForm";

const AddLocationsScreen = () => {

    const [index, setIndex] = useState(0)
    return (
        <>

            <Tab value={index} onChange={setIndex} indicatorStyle={{ backgroundColor: '#edd190' }}>
                <Tab.Item
                    variant={index === 0 ? 'primary' : 'default'}
                    buttonStyle={{
                        backgroundColor: index === 0 ? '#edd190' : 'transparent',
                    }}
                    title="campsites"
                    icon={{
                        name: 'automobile',
                        type: 'font-awesome',
                        color: '#558453ff',
                    }}
                    iconPosition="top"
                    titleStyle={{
                        fontSize: 14,
                        marginTop: 5,
                        color: '#558453ff'
                    }}
                />
                <Tab.Item
                    variant={index === 1 ? 'primary' : 'default'}
                    buttonStyle={{
                        backgroundColor: index === 1 ? '#edd190' : 'transparent',
                    }}
                    title="hikes"
                    icon={{
                        name: 'leaf',
                        type: 'font-awesome',
                        color: '#558453ff',

                    }}
                    iconPosition="top"
                    titleStyle={{
                        fontSize: 14,
                        marginTop: 5,
                        color: '#558453ff'

                    }}
                />
                <Tab.Item
                    variant={index === 2 ? 'primary' : 'default'}
                    buttonStyle={{
                        backgroundColor: index === 2 ? '#edd190' : 'transparent',
                    }}
                    title="overlooks"
                    icon={{
                        name: 'road',
                        type: 'font-awesome',
                        color: '#558453ff',
                    }}
                    iconPosition="top"
                    titleStyle={{
                        fontSize: 14,
                        marginTop: 5,
                        color: '#558453ff'
                    }}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} >
                <TabView.Item style={{ width: '100%' }}>
                    <AddCampsiteForm />
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <AddHikeForm />
                </TabView.Item>
                <TabView.Item style={{ width: '100%' }}>
                    <AddOverlookForm />
                </TabView.Item>
            </TabView>
        </>
    )
};

export default AddLocationsScreen;