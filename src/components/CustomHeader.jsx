// components/CustomHeader.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants';
import { Home } from 'lucide-react-native';

const CustomHeader = ({ navigation, title, icon: Icon }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingVertical: 10,
            backgroundColor: Colors.DEFAULT_WHITE,
            elevation: 4
        }}>
            {/* Left icon (toggle drawer or back) */}
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                {Icon ? <Icon size={28} color={Colors.DEFAULT_SKY_BLUE} /> : <Home size={28} color={Colors.DEFAULT_SKY_BLUE} />}
            </TouchableOpacity>

            {/* Title */}
            <Text style={{ fontSize: 18, fontWeight: '600', color: Colors.DEFAULT_BLACK }}>
                {title}
            </Text>

            {/* Right placeholder (profile/settings etc.) */}
            <TouchableOpacity onPress={() => alert("Right icon pressed")}>
                <Text style={{ color: Colors.DEFAULT_SKY_BLUE }}>⚙️</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;
