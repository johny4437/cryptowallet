import React from 'react';
import { View, Animated} from 'react-native';

import {IconTextButton} from '../components'
import icons  from '../constants/icons';
import Colors from '../constants/colors';
import {SIZES} from '../constants/theme'


import { connect } from 'react-redux';
const MainLayout = ({children, isTradeModalVisible}) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(()=>{
        if(isTradeModalVisible){
            Animated.timing(modalAnimatedValue,{
                toValue:1,
                duration:500,
                useNativeDriver:false
            }).start(0);
        }else{
            Animated.timing(modalAnimatedValue,{
                toValue:0,
                duration:500,
                useNativeDriver:false
            }).start(0);
        }
    },[isTradeModalVisible])

    const modalY = modalAnimatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[SIZES.height, SIZES.height - 210]
    })

    return (
        <View
        style={{
            flex: 1,
        }}
        >
            {children}
            {/* Din BACKGROUND */}

                {isTradeModalVisible && (
                    <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor:Colors.metalDark
                    }}
                    opacity={modalAnimatedValue}
                    />
                )}

            {/* MODAL */}
            <Animated.View 
            style={{
                position: 'absolute',
                left: 0,
                top:modalY,
                width: "100%",
                padding: SIZES.padding, 
                backgroundColor:Colors.carbonDark

            }}>
                <IconTextButton
                label="Transferir"
                icon={icons.send}
                onPress={() =>console.log("@##$")}
                />
                <IconTextButton
                label="Sacar"
                icon={icons.withdraw}
                onPress={() =>console.log("@##$")}
                />
            </Animated.View>
        </View>
    )
}

// export default MainLayout

function mapStateToProps(state){
    return {
      isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch){
   return{

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout)