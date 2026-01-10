import { useState } from "react";
import { View } from "react-native";

import { Tab, TabView, Text } from 'react-native-elements';
import AddCampsitesForm from "../features/campsites/AddCampsitesForm";

const AddLocationsScreen = () => {

    const [index, setIndex] = useState(0)
    return (
        <>

            <Tab value={index} onChange={setIndex}>
                <Tab.Item
                    title="campsites"
                    icon={{
                        name: 'automobile',
                        type: 'font-awesome',
                        color: 'black',
                    }}
                    iconPosition="top"
                />
                <Tab.Item
                    title="hikes"
                    icon={{
                        name: 'leaf',
                        type: 'font-awesome',
                        color: 'black',
                    }}
                    iconPosition="top"
                />
                <Tab.Item
                    title="overlooks"
                    icon={{
                        name: 'road',
                        type: 'font-awesome',
                        color: 'black',
                    }}
                    iconPosition="top"
                />
            </Tab>

            <TabView value={index} onChange={setIndex} >
                <TabView.Item style={{width: '100%' }}>
                        <AddCampsitesForm />
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
                    <Text h1>Hikes</Text>
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
                    <Text h1>Overlooks</Text>
                </TabView.Item>
            </TabView>
        </>
    )
};

export default AddLocationsScreen;