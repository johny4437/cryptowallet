import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import Colors from '../constants/colors';
import {SIZES} from '../constants/theme';

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            height: 50,
            borderRadius:SIZES.radius,
            backgroundColor:Colors.white,
            ...containerStyle
        }}
        onPress={onPress}
        >
            <Image
            source={icon}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20
            }}
            />
            <Text
            style={{
                marginLeft:SIZES.base,
                ...SIZES.h3
            }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default IconTextButton
