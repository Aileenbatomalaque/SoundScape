import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
    return (
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                style={{ width: 24, height: 24, tintColor: color }} 
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarStyle: { backgroundColor: 'white' },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.search}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    title: 'Your Library',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.library}
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabLayout;