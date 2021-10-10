import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import Colors from '../constants/colors';

const TabIcon = ({focused, icon, iconStyle, label, isTrade}) =>{
    if(isTrade){
        return(
            <View style={{
                alignItems:"center",
                justifyContent:"center",
                width: 70,
                height: 70,
                borderRadius:35, 
                backgroundColor:Colors.black,
                marginTop:-5
                }}>
                <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? Colors.asphalt : Colors.light,
                    ...iconStyle
                }}
                />
                <Text style={{color: focused ? Colors.asphalt : Colors.light, fontSize:12}}>{label}</Text>
            </View>
        );
    }else{
        return(
            <View style={{alignItems:"center" , justifyContent:"center"}}>
                <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width:25,
                    height:25,
                    tintColor:focused ? Colors.light : Colors.asphalt,
                    ...iconStyle
                }}
                />
                <Text style={{color: focused ? Colors.light : Colors.asphalt, fontSize:10}}>
                    {label}
                </Text>
            </View>
        )
    }
    
}

export default TabIcon;